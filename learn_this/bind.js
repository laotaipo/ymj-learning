// function f1(a, b) {
//     console.log(this, a, b)
//     return a + b
// }

// const f2 = f1.bind({x: 1, y: 2}, 10, 20)
// console.log(f2())

Function.prototype.bind1 = function() {
    // 将参数转为数组
    const args = Array.prototype.slice.call(arguments)
    // args的第一项为传入的this
    const t = args.shift()
    // this即为f1
    const self = this
    return function () {
        console.log(5555, this)
        return self.apply(t, args)
    }
}

function f1(a, b) {
    console.log(this, a, b)
    // return a + b
}
const f2 = f1.bind1({x: 1, y: 2}, 10, 20)
console.log(555, 'f2---', f2)
console.log(f2())
