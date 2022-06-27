class Person {
	constructor(name, age) {
		this.name = name
		this.age = age
	}
	eat() {
		console.log(`${this.name} eat something`)
	}
}

class Student extends Person {
	constructor(name, age, number) {
		super(name, age)
		this.number = number
	}

	study() {
		console.log(`${this.name} 的学号是${this.number}`)
	}
}

const p = new Person('wenxiaohua', 20)
const s1 = new Student('ymj', 18, 2000)

p.eat()
s1.eat()
s1.study()

console.log(p.__proto__ === s1.__proto__.__proto__)

console.log('***', Student.__proto__ === Function.prototype)

console.log(p, p.__proto__.eat)
console.log(Person)
