// import {foo} from './a';
// console.log('b.mjs');
// console.log(foo);
// export let bar = 'bar';

import {foo} from './a.mjs';
console.log('b.mjs');
console.log(foo());
function bar() { return 'bar' }
export {bar};