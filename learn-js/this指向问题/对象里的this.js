const o = {
	a: 1,
	b: 2,
	c: this.a,
	fn1: function () {
		console.log(this.a)
	},
	fn2: () => {
		console.log(this.a)
	},
	fn3: function () {
		return () => {
			console.log(this.a)
		}
	},
	fn4: function () {
		return function () {
			console.log(this.a)
		}
	},
	fn5: () => {
		return function () {
			console.log(this.a)
		}
	},
}

let o1 = {
	a: 10,
	b: 20,
}

console.log(o.c) // undefined

o.fn1() // 1
o.fn2() // undefined
const f3 = o.fn3()
f3() // 1
const f4 = o.fn4()
f4() // undefined

const f3C = o.fn3.call(o1)
f3C() // 10

const f4C = o.fn4.call(o1)
f4C() // undefined

f3.call(o1) // 1
f4.call(o1) // 10

const f5 = o.fn5()
f5() // undefined
f5.call(o1) // 10
const f5C = o.fn5.call(o1)
f5C() // undefined

o.fn1.call(o1) // 10
o.fn2.call(o1) // undefined
