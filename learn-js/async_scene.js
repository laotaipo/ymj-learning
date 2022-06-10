async function async1 () {
    console.log('async1 start') // 2
    await async2()
    // await后面都作为回调内容 --微任务
    console.log('async1 end') // 6
}

async function async2 () {
    console.log('async2') // 3
}

console.log('script start') // 1

setTimeout(function () {
    console.log('setTimeout')// 8
}, 0)

async1()

new Promise((function (resolve) {
    // 初始化Promise的时候传入的参数会立即执行
    console.log('promise1') // 4
    resolve()
})).then(function () { // 微任务
    console.log('promise2') // 7
})

console.log('script end') // 5