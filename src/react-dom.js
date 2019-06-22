import { initVNode } from './vdom';

export function render(vdom, container) {
  let rootNode = initVNode(vdom);
  container.appendChild(rootNode);
}
