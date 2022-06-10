Function.prototype.myBind = function () {
	const fn = this
	const args = [...arguments]
	const newThis = args.shift()
	return function () {
		fn.apply(newThis, args)
	}
}

const o = {
	a: 1,
	b: 1,
	f: function (c) {
		console.log(this.a + this.b + c)
	},
}

o.f.bind({ a: 3, b: 20 }, 40)()
