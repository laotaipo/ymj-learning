const o = {
	a: 1,
	[Symbol('b')]: 2,
}

for (let key in o) {
	console.log(key, o[key])
}

console.log(Object.getOwnPropertyNames(o), Object.getOwnPropertySymbols(o))
