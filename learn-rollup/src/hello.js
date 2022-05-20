// export function hello() {
// 	console.log('hello')
// }

// export const hello = () => {
// 	console.log('hello world')
// }

function A(name, age) {
	this.name = name
	this.age = age
	this.r = 19
	this.o = {
		a: 9,
		b: 8,
		c: [2, 3, 4],
	}
	// this.say = function () {
	// 	console.log(999)
	// }
}
A.prototype.say = function () {
	console.log('hello')
}

const a = new A(3, 4)
const b = new A(5, 6)

a.o.a = 99
console.log(b.o.a)


// a.r = 20
// console.log(b.r)
// a.o.a = 99
// console.log(b.o.a)

// a.o.c[0] = 99
// console.log(a.o.c, b.o.c)
// a.__proto__.say = function () {
// 	console.log(999)
// }

// a.say()
// b.say()

// console.log(a.say() === b.say())
// console.log(a, b, a.r === b.r, a.o === b.o, a.o.a === b.o.a, a.o.c === b.o.c)
