type Obj<T> = {
	a: T
	b: T[]
}

const oo1: Obj<number> = {
	a: 2,
	b: [1, 3, 4],
}

console.log(oo1)
