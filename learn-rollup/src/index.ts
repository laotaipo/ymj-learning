class Cm {
	public data
	constructor(data: { a: number; b: number }) {
		this.data = data
	}
	changeData() {
		this.data.a = 100
	}
}
const da = {
	a: 1,
	b: 2,
}

const Cm1 = new Cm(da)
const Cm2 = new Cm(da)

Cm1.changeData()
console.log(Cm1.data) // {a: 100, b: 2}
console.log(Cm2.data) // {a: 1, b: 2}
