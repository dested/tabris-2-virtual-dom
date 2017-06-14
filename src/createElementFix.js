
import * as virtualDom from './virtual-dom/index';

var h = virtualDom.h;


window.JSX = {
  createElement: function createElement(jsxType, properties, ...children) {
    properties = properties || {};
    let on = {};
    let once = {};
    for (let m in properties) {
      if (m.indexOf("on-") == 0) {
        on[m.substr(3)] = properties[m];
        delete properties[m];
      }
      if (m.indexOf("once-") == 0) {
        once[m.substr(5)] = properties[m];
        delete properties[m];
      }
    }
    let result = new jsxType(properties);
    for (let m in on) {
      result.on(m, on[m]);
    }
    for (let m in once) {
      result.once(m, once[m]);
    }
    return result.append.apply(result, children);
  }
};

window.JSX = {
  createElement: h
};