function myInstanceof(obj, Fn) {
	if (typeof obj !== 'object' || !obj) return
	const structor = obj.__proto__
	if (structor !== Fn.prototype) {
		return myInstanceof(structor, fn)
	} else {
		return true
	}
}

console.log(myInstanceof([], Array))
