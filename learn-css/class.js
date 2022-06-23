class Test {
	constructor() {
		this.a = { a: 1 }
	}

	getA() {
		console.log(this.a)
	}
}

const o1 = new Test()
const o2 = new Test()

console.log(o1.getA === o2.getA)

console.log(o1.a === o2.a)
