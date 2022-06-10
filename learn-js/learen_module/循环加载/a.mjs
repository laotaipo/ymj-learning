// import {bar} from './b';
// console.log('a.mjs');
// console.log(bar);
// export let foo = 'foo';

import {bar} from './b.mjs';
console.log('a.mjs');
console.log(bar());
function foo() { return 'foo' }
export {foo};
