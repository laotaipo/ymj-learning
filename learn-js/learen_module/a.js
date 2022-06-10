(async () => {
    await import('./lib.mjs')
})()
let a = 1
let o  =  {
    a: 2,
    b: 3,
    c: [1, 2, 3],
    d: {
        aa: 2
    }
}
module.exports = {
    a,
    o,
}