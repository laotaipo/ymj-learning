// import f from './a'
// import { aa, oo } from './cc'
// console.log('第一次', aa, oo)

// f()

// console.log('第二次', aa, oo)

const { f } = require('./cms/a')
const { aa, oo } = require('./cms/cc')

console.log('第一次', aa, oo)

f()

console.log('第二次', aa, oo)
