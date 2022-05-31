// type PlusType = (x: number, y: number) => number

import { stringify } from 'json5'

// function plus(x: number, y: number): number {
// 	return x + y
// }

// const p: PlusType = plus

// console.log(p(4, 7))

function getLen(s: number | string) {
	// const str = s as string
	// if (str.length) {
	// 	return str.length
	// } else {
	// 	const num = s as number
	// 	return num.toString().length
	// }
	if ((<string>s).length) {
		return (<string>s).length
	} else {
		return s.toString().length
	}
}

console.log(getLen('jjjll')) // 5
console.log(getLen(777)) // 3
