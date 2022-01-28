function muti (number) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(number * number)
        }, 1000)
    })
}

const numbers = [1, 2, 3]
// numbers.forEach(async (item) => {
//     const res = await muti(item)
//     console.log(res)
// })

!(async function () {
    for (let i of numbers) {
        const res = await muti(i)
        console.log(res)
    }
})()