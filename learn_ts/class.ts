class Animal {
	name: string
	constructor(name) {
		this.name = name
	}
	run() {
		return `${this.name}run`
	}
}

class Dog extends Animal {
	wang() {
		return `wangwang`
	}
}

const dogg = new Dog('ww')

console.log(dogg, dogg.name, dogg.run(), dogg.wang())

class Cat extends Animal {
	constructor(name) {
		super(name)
	}
	run() {
		return `name, ${super.run()}`
	}
}

const cat = new Cat('miao')
console.log(8888, cat.run())
