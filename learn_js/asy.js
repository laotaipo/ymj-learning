// async function fn1 () {
//     return Promise.reject(200)
//     // throw new Error()
//     // return 100
// }

// console.log(fn1())


!(async function() {
    try {
        console.log(rrr)
        const data =  await p1
        console.log(data)
    } catch (err) {
        console.log('err', err)
    }

})()