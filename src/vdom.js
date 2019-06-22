export function createVNode(vtype, type, props, children) {
  //创建虚拟DOM

  return {
    vtype, type, props, children,
  };
}

function initVChildren(node, children) {
  children.forEach((child) => {
    node.appendChild(initVNode(child));
  });
}

function initVElement(vnode) {
  const { type, props, children } = vnode;

  const node = document.createElement(type);

  if (props) {
    const { key, style, ...rest } = props;
    Object.keys(rest).forEach((k) => {
      node.setAttribute(k, rest[k]);
    });
  }

  //初始化子元素
  initVChildren(node, children);

  return node;
}

function initFuncComp(vnode) {

  const { type, props } = vnode;

  let newNode = type(props);

  return initVNode(newNode);
}

function initClassComponent(vnode) {
  const { type, props } = vnode;

  let component = new type(props);

  const newNode = component.render();

  return initVNode(newNode);
}

export function initVNode(vnode) {

  //初始化Vnode
  const { vtype } = vnode;

  if (!vtype) {
    // 如果没有vtype, 其实就是文本
    return document.createTextNode(vnode);
  }

  if (vtype === 1) {
    //  函数组件
    return initVElement(vnode);
  } else if (vtype === 2) {
    return initFuncComp(vnode);
  } else if (vtype === 3) {
    return initClassComponent(vnode);
  }

}

