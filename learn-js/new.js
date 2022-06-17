function createObject(Con, ...rest) {
	console.log(899, Con, [].slice.call(arguments, 1))
	// 创建新对象obj
	// var obj = {};也可以
	var obj = Object.create(null)

	// 将obj.__proto__ -> 构造函数原型
	// (不推荐)obj.__proto__ = Con.prototype
	Object.setPrototypeOf(obj, Con.prototype)

	// 执行构造函数，并接受构造函数返回值
	const ret = Con.apply(obj, rest)

	// 若构造函数返回值为对象，直接返回该对象
	// 否则返回obj
	return typeof ret === 'object' ? ret : obj
}

function Aaa(name, age) {
	this.name = name
	this.age = age
}

Aaa.prototype.sayHi = function () {
	console.log(`${this.name}--hi`)
}

const obj = createObject(Aaa, 'ymj', 18)
console.log(obj)

console.log(999, Array.prototype.constructor === Array)
