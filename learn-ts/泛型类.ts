// class Log<T> {
// 	run(value: T) {
// 		console.log(value)
// 		return value
// 	}
// }

// const log1 = new Log<number>()
// log1.run(3)

// const log2 = new Log()
// log2.run('8880jjj')

// interface Length {
// 	length: number
// }
// function log<T extends Length>(value: T): T {
// 	console.log(value.length)
// 	return value
// }

// log({ length: 3 })
// log([3, 4, 5, 6])
// log('3i9900s')

// class Stack<T> {
// 	private stsck: T[] = []
// 	push(item: T): number {
// 		return this.stsck.push(item)
// 	}
// 	pop(): T {
// 		return this.stsck.pop()
// 	}
// }

// const s11 = new Stack<number>()
// console.log(s11.push(1))
// console.log(s11.push(2))

// console.log(s11.pop())

// s11.push('333r')

interface IPerson {
	'/a': {
		chinese: string
	}
	'/b': {
		math: number
	}
}

function request<T extends keyof IPerson>(url: T, params: IPerson[T]) {
	return url
}

console.log(request('/a', { chinese: '333' }))

function oo(a: keyof IPerson) {
	console.log(a)
}

oo('')
