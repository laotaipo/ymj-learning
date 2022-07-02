// interface Add {
// 	(x: number, y: number): number
// }

// type Add1 = (x: number, y: number) => string

// const f1: Add = (a: number, b: number) => {
// 	return a + b
// }

// console.log(f1(1, 4))

// const f2: Add1 = function (a: number, b: number) {
// 	return String(a + b)
// }

// console.log(f2(4, 8))

function add(...rest: number[]): number
function add(...rest: string[]): string
function add(...rest: any[]): any {
	if (typeof rest[0] === 'string') {
		return rest.join('+')
	} else {
		return rest.reduce((pre, cur) => pre + cur)
	}
}
console.log(add(1, 2, 3, 4))
console.log(add('2', 'aa', 'rr4'))
