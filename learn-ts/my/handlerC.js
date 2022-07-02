"use strict";
exports.__esModule = true;
var HandlerC = /** @class */ (function () {
    function HandlerC() {
    }
    HandlerC.prototype.handle = function (typecode) {
        switch (typecode) {
            case 21:
                console.log(21);
                break;
            case 22:
                console.log(22);
        }
    };
    return HandlerC;
}());
exports["default"] = new HandlerC();
