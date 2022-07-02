interface Obj {
	a: number
	b: string
}

const o1 = {
	a: 2,
	b: 'ee',
	c: 99,
}

const auu: Obj['a'] = 398
console.log(auu)

const uu: keyof typeof o1 = 'c'
console.log(uu)

const key: keyof Obj = 'a'

console.log(key)
