interface People {
	readonly id: number
	name: string
	gender: number
	[x: string]: any
}

const p1 = {
	id: 1,
	name: '模具',
	gender: 0,
	age: 19,
	qq: 3,
	4: 1,
}
const p2: People = p1
const p3: People = {
	id: 1,
	name: 'name',
	gender: 1,
	age: 6,
}
console.log(p2, p3)
