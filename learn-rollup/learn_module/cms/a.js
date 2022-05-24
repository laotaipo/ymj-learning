let { aa, oo } = require('./cc')

function f() {
	aa++
	oo.a = [1, 2, 3]
	// oo.a = 10
	// oo.oooa.arrr.push(99)
	console.log('a.js', aa, oo)
}

module.exports = {
	f,
}
