class Person {
	name1: string
	age: number
	protected hh = 'hhh'
	constructor(name, age) {
		this.name1 = name
		this.age = age
	}
	eat() {
		console.log(`${this.name1} is eating`, this.hh)
	}
	static sleep() {
		console.log('sleeping')
	}
}

class Student extends Person {
	number: number
	constructor(name, age, number) {
		super(name, age)
		this.number = number
	}
	study() {
		console.log(this.hh)
		console.log(`${this.name1} 的 number is ${this.number}`)
	}
}
const p1 = new Person('jj', 3)

const s1 = new Student('ymj', 14, 888)
s1.study()
s1.eat()
Person.sleep()
Student.sleep()
