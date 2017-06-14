'use strict';


module.exports = MutableFocusHook;

function MutableFocusHook() {
    if (!(this instanceof MutableFocusHook)) {
        return new MutableFocusHook();
    }
}

MutableFocusHook.prototype.hook = function (node) {
    setTimout(function () {
        if (document.activeElement !== node) {
            node.focus();
        }
    },0);
};
