const o = {
	a: 1,
	b: 2,
	c: this.a,
	fn1: function () {
		console.log(this.a)
	},
	fn2: () => {
		console.log(this, this.a)
	},
}

console.log(o.c)

o.fn1()
o.fn2()
