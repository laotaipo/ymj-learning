const p1 = Promise.resolve().then(() => {
    return 100
})

console.log(p1) // fulfilled

const p2 = Promise.resolve().then(() => {
    throw new Error('err')
})
console.log('p2', p2) // rejected

const p3 = Promise.reject(4).catch(err => {
    console.log('p3err', err)
    return 1
}).then((res) => {
    console.log('res', res)
})
console.log('p3', p3)

