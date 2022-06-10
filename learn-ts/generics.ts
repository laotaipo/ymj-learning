// function echo<T>(arg: T): T {
// 	return arg
// }

// const ab = echo(2)
// console.log(ab)

// function swap<T, U>(tuple: [T, U]): [U, T] {
// 	return [tuple[1], tuple[0]]
// }

// // console.log(swap([1, 'str']))
// const tt = swap([1, 'str'])
// tt[0] = 'ooo'
// console.log(tt)

// function echoWithArr<T>(args: T[]): T[] {
// 	console.log(args.length)
// 	return args
// }
// echoWithArr(['r', 's', 't']) // 3

// interface IWithLength {
// 	length: number
// }

// function echoWithlength<T extends IWithLength>(args: T): T {
// 	console.log(args.length)
// 	return args
// }

// echoWithlength('jjwwj') // 5
// echoWithlength([4, 7, 9, 0]) // 4
// echoWithlength({ length: 8, o: 'ooi' }) // 8

// class Queue<T> {
// 	private data: T[] = []
// 	push(item: T) {
// 		return this.data.push(item)
// 	}
// 	pop(): T {
// 		return this.data.shift()
// 	}
// }

// const q = new Queue<number>()
// q.push(8)
// console.log(q.pop()) // 8
// // q.push('uuu') // 报错

// interface KeyPair<T, U> {
// 	key: T
// 	value: U
// }

// const kp1: KeyPair<number, string> = { key: 3, value: 'iii' }
// console.log(kp1.key, kp1.value) // 3 iii

// const kp2: KeyPair<string, number> = { key: 'lll', value: 3 }

// console.log(kp2.key, kp2.value) // lll 3

interface IPlus<T> {
	(a: T, b: T): T
}

function plus(a: number, b: number): number {
	return a + b
}

function connect(a: string, b: string): string {
	return a + b
}

const aa: IPlus<number> = plus

const bb: IPlus<string> = connect

console.log(aa(1, 2)) // 3

console.log(bb('22rr', 'ddd')) // 22rrddd
