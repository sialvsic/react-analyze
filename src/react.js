function createElement(type, props, ...children) {

  //区分不同的组件类型
  let vtype = null;

  if (typeof type === 'string') {
    //字符串 就是普通的div这种元素
    vtype = 1;
  } else if (typeof type === 'function') {
    //函数就是组件
    if (type.isReactComponent) {
      vtype = 3;
    } else {
      vtype = 2;
    }
  }

  props.children = children;
  return {
    type,
    props,
    children,
  };
}

class Component {
  //区别class组件和function组件
  static isReactComponent = true;

  constructor(props) {
    this.props = props;
  }

  setState() {
    //异步更新队列里面push任务

  }
}

class Updater {
  constructor() {

  }
}

export default {
  createElement,
  Component,
};
