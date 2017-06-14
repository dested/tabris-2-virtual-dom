'use strict';

var split = require('../browser-split');

var classIdSplit = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/;
var notClassId = /^\.|#/;

module.exports = parseTag;

function parseTag(widgetConstructor, props) {
    if (!widgetConstructor) {
        return 'Composite';
    }
    return widgetConstructor.name;
}
