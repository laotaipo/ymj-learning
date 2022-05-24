import { aa, oo } from './cc.js'
export default function () {
	console.log('a.js第一袭', aa, oo)
	oo.a++
	oo.c = 199
	oo.ooa.arrr.push(9888887)
	oo.ooa.a = 888
	console.log('a.js', aa, oo)
}
