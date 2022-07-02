"use strict";
exports.__esModule = true;
var HandlerA = /** @class */ (function () {
    function HandlerA() {
    }
    HandlerA.prototype.handle = function (typecode) {
        switch (typecode) {
            case 1:
                console.log(1);
                break;
            case 2:
                console.log(2);
        }
    };
    return HandlerA;
}());
exports["default"] = new HandlerA();
