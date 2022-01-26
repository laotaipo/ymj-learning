var f1 = function () {
    throw new Error();
    return 1;
};
var a = f1();
console.log(3333, a, typeof a);
