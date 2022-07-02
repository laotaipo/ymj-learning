"use strict";
exports.__esModule = true;
var handlerA_1 = require("./handlerA");
var handlerB_1 = require("./handlerB");
var handlerC_1 = require("./handlerC");
var Manager = /** @class */ (function () {
    function Manager() {
    }
    Manager.prototype.getGroup = function (code) {
        if (code >= 0 && code <= 10) {
            return 1;
        }
        else if (code > 10 && code < 20) {
            return 2;
        }
        else if (code >= 20 && code <= 30) {
            return 3;
        }
    };
    Manager.prototype.handle = function (code) {
        var codeGroup = this.getGroup(code);
        console.log(codeGroup);
        switch (codeGroup) {
            case 1:
                handlerA_1["default"].handle(code);
                break;
            case 2:
                handlerB_1["default"].handle(code);
                break;
            case 3:
                handlerC_1["default"].handle(code);
                break;
        }
    };
    return Manager;
}());
var manager = new Manager();
manager.handle(2);
