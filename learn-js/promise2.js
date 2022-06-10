const p1 = new Promise((resolve, reject) => {


})
console.log('~~~~', p1) // pending

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
        console.log('~~~~', p2)
    })
})

setTimeout(() => {
    console.log('~~~', p2)
}, 100)

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(5)
        console.log('~~~~~p3', p3)
    })
})