function f1 () {
    const a = 100
    return function () {
        console.log('f1====',a, c)
        return 1
    }
}

const c = 500

const a = 200
const f2 = f1()
console.log('f2====', f2(), a)

// console.log('f3====',f2())

// function f1 (f2) {
//     const a = 100
//     f2()
// }

// const a = 300

// const f2 = function () {
//     console.log(a) // 300
// }

// f1(f2)