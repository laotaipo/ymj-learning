interface Person {
	readonly name: string
	age: number
	readonly o: { a: number }
}

const ymj: Person = {
	name: 'ymj',
	age: 20,
	o: {
		a: 9,
	},
}
ymj.o.a = 8

type S = {
	readonly name: string
	age: 8
	readonly o: { a: number }
}

const sss: S = {
	name: 'yyy',
	age: 8,
	o: {
		a: 9,
	},
}

sss.o.a = 30

console.log(ymj, sss)
