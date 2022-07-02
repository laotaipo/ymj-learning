// abstract class Animal {
// 	eat() {
// 		console.log('eat')
// 	}
// 	abstract sleep(): void
// }

// class Dog extends Animal {
// 	constructor(name: string) {
// 		super()
// 		this.name = name
// 	}
// 	name: string
// 	run() {}
// 	sleep() {
// 		console.log('sleep')
// 	}
// }

// class Cat extends Animal {
// 	sleep() {
// 		console.log('cat sleep')
// 	}
// }

// const dog = new Dog('xx')
// dog.eat()
// dog.sleep()
// console.log(dog)

// const cat = new Cat()
// cat.sleep()

class WorkFlow {
	step1() {
		console.log('step1')
		return this
	}
	step2() {
		console.log('step2')
		return this
	}
}
class MyFlow extends WorkFlow {
	next() {
		console.log('next')
		return this
	}
}
// new WorkFlow().step1().step2()

new MyFlow().step1().next().step1()
