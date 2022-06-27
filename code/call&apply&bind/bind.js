// bind可以在生成bind函数的时候传部分参数;真实执行的时候传递另一部分参数，所以涉及参数合并的问题
// bind返回的函数作为构造函数时，bind时指定的this失效，但传入的参数仍有效

Function.prototype.myBind = function () {
	const fn = this
	if (typeof fn !== 'function') {
		throw new Error('Not a function')
	}
	const args = [].slice.call(arguments, 0)
	const _this = args.shift()

	const NonFn = function () {}
	const fBound = function () {
		const bindArgs = [].slice.call(arguments)
		return fn.apply(this instanceof NonFn ? this : _this, args.concat(bindArgs))
	}
	NonFn.prototype = fn.prototype
	fBound.prototype = new NonFn()
	return fBound
}

// function fn(a, b, c) {
// 	this.a = a
// 	this.b = b
// 	this.c = c
// 	return a + b + c
// }
// fn.prototype.fn1 = function () {
// 	console.log('fn1')
// }

// console.log(fn(1, 2, 3))

// const o = {
// 	a: 100,
// }
// // const fnB = fn.bind(o, 10)
// const fnB = fn.myBind(o, 10)
// console.log(fnB(20, 30))

// ----------------test构造函数-----------
function Person(name, age) {
	this.name = name
	this.age = age
}

Person.prototype.say = function () {
	console.log('my name is' + this.name + 'I am' + this.age + 'years old')
}

const o = {
	name: 'ym',
}

// const BindPerson = Person.bind(o, '杨明')
const BindPerson = Person.myBind(o, '杨明')

const per = new BindPerson(18)
per.say()
