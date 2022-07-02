// interface Obj {
// 	a: string
// 	b: number
// 	c: boolean
// }
// // 把属性变为只读
// type ReadonlyObj = Readonly<Obj>

// // 把所有属性变为可选
// type PartialObj = Partial<Obj>

// // 抽取Obj的子集
// type PickObj = Pick<Obj, 'a' | 'b'>

// // 结果如下图
// type RecordObj = Record<'x' | 'y', Obj>

// type AA = {
// 	a: number
// 	getA: () => void
// }

// class AC implements AA {
// 	a = 1
// 	getA() {}
// }

// const aar = new AC()
// console.log(88, aar)

// type AA<T> = {
// 	a: T
// }

// const aai: AA<number> = { a: 3 }
// console.log(aai.a)

interface AA {
	a: number
}

interface AA {
	b: string
}

const aaa5: AA = {
	a: 1,
	b: 'dd',
}

console.log(aaa5)

type BB = {
	a: number
}

// type BB = {
// 	b: string
// }

const bbb: BB = {
	a: 1,
	// b: 'jje',
}
console.log(bbb)
