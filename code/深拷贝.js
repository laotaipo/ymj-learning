function deepClone(obj) {
	if (!obj || typeof obj !== 'object') return obj
	let res = Array.isArray(obj) ? [] : {}
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			res[key] = deepClone(obj[key])
		}
	}
	return res
}

let o = {
	a: [1, 2, 3],
	b: { k: 1 },
	c: 'sjjj',
	d: [{ a: 1 }],
}
const o1 = deepClone(o)
console.log(o1, o1.c === o.c, o1.b === o.b, typeof deepClone)
