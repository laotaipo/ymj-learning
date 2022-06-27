function Person(name, age) {
	this.name = name
	this.age = age
}

Person.prototype.sayHi = function () {
	console.log('hi I am' + this.name + 'I am' + this.age + 'years old')
}

function Student(name, age, number) {
	this.number = number
	Person.call(this, name, age)
}
console.log('$$', Student.__proto__ === Person.__proto__)
// Student.prototype.__proto__ = Person.prototype
// Student.prototype = new Person()
Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student
Student.prototype.study = function () {
	console.log('my number is' + this.number)
}

const stu1 = new Student('ymj', 18, 500)
stu1.sayHi()
stu1.study()

console.log('~~~~~', Student.prototype.constructor)
console.log('***', Student.__proto__ === Function.prototype)

const o1 = { a: 1, b: 2 }
const o2 = {
	c: 3,
	fn: function () {
		console.log(this, this.c, this.a)
	},
}
o1.__proto__ = o2
for (let key in o1) {
	console.log(key)
}
console.log(o1.c)
o1.fn()
