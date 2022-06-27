var myObject = {
	foo: 1,
	bar: 2,
	get baz() {
		return this.foo + this.bar
	},
}

// myObject.__proto__ = {
// 	a: 1,
// 	b: 'kk',
// }
Reflect.setPrototypeOf(myObject, {
	a: 1,
})
console.log('a' in myObject, Reflect.has(myObject, 'a'))
console.log(Reflect.get(myObject, 'foo')) // 1
console.log(Reflect.get(myObject, 'bar')) // 2
console.log(Reflect.get(myObject, 'baz')) // 3

console.log(Reflect.getPrototypeOf(myObject))

function aa() {}
console.log(typeof aa, aa instanceof Object, aa.toString())
