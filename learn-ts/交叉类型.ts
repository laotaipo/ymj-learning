// interface IA {
// 	a: number
// 	b: string
// 	say(v: string): void
// }

// interface IB {
// 	b: string
// 	sing(song: number): void
// }

// interface IC extends IB {
// 	c: string[]
// }

// const cccc1: IC = {
// 	b: 'uuu',
// 	c: ['ss', 's3'],
// 	sing(song: number) {
// 		console.log(song)
// 	},
// }

// cccc1.sing(99)

// const o: IA & IB = {
// 	a: 1,
// 	b: 'ff',
// 	say(val: string) {
// 		console.log(val)
// 	},
// 	sing(song: number) {
// 		console.log(song)
// 	},
// }
// console.log(o)

// class A implements IA, IB {
// 	a = 9
// 	b = 'jj'
// 	say(val: string) {
// 		console.log(val)
// 	}
// 	sing(song: number) {
// 		console.log('sing', song)
// 	}
// }

// const aaa1 = new A()
// aaa1.say('dd')

type Person = {
	name: string
	age: number
}

type Animal = {
	sleep: () => string
}

const aaa22: Person & Animal = {
	name: 'hhw',
	age: 3,
	sleep() {
		console.log('sleep', this.age)
		return this.name
	},
}
aaa22.sleep()
