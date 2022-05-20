// import { hello } from './hello'
// import util from './util'
// import './test.scss'
// // const util = require('./util')

// hello()
// console.log(util.a)

// export const world = 'world'

// import hello from './myVue.vue'

class A {
	o1
	arr1
	constructor(o1: any, arr1: any) {
		this.o1 = o1
		this.arr1 = arr1
	}
}

const data = function () {
	return {
		a: 1,
		b: 2,
	}
}

const a = new A(data(), [1, 2, 3])
const b = new A(data(), [1, 2, 3])

a.o1.a = 2
console.log(b.o1.a, a.o1 === b.o1)

// console.log(a, b)

// function A(name: number, age: number) {
// 	this.name = name
// 	this.age = age
// }

// const a = new A(3, 4)
// const b = new B(5, 6)

// console.log(a.r == b.r)

// console.log(a.o.a === b.o.a)
// console.log(a, b, a === b, a.say === b.say, a.r === b.r, a.o === b.o, a.o.a === b.o.a)

// function install(Vue) {
// 	Vue.component(hello.name, hello)
// }
// export default install
