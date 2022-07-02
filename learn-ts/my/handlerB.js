"use strict";
exports.__esModule = true;
var HandlerB = /** @class */ (function () {
    function HandlerB() {
    }
    HandlerB.prototype.handle = function (typecode) {
        switch (typecode) {
            case 11:
                console.log(11);
                break;
            case 12:
                console.log(12);
        }
    };
    return HandlerB;
}());
exports["default"] = new HandlerB();
