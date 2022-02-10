import { resolve } from 'path'
import a from './a.js'
import { counter, incCounter } from './lib.mjs';
console.log(counter); // 3
incCounter();
console.log(counter); // 4
const { a: ss, o } = a


resolve('main.js')
console.log('4444', a, ss, o)