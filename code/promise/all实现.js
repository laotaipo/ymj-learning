Promise.myAll = (...rest) => {
	const promises = rest[0].map(p => (p instanceof Promise ? p : Promise.resolve(p)))
	return new Promise((resolve, reject) => {
		const result = new Array(promises.length)
		let temp = 0
		for (let i = 0; i < promises.length; i++) {
			const p = promises[i]
			p.then(res => {
				temp++
				result[i] = res
				if (temp === promises.length) {
					resolve(result)
				}
			}).catch(err => reject(err))
		}
	})
}

// const p1 = new Promise((resolve, reject) => {
// 	setTimeout(() => resolve(1), 1000)
// })

// const p2 = new Promise((resolve, reject) => {
// 	setTimeout(() => resolve(2), 2000)
// })

// const p3 = new Promise((resolve, reject) => {
// 	setTimeout(() => resolve(1.5), 1300)
// })

// const p4 = new Promise((resolve, reject) => {
// 	setTimeout(() => reject(4), 3000)
// }).catch(err => console.log('p4 err', err))
// p4.catch(err => console.log('p4 err', err))

// Promise.myAll([p1, p2, p3, p4])
// 	.then(res => console.log(res))
// 	.catch(err => console.log(555, err))

// Promise.all([p1, p2, p3, p4])
// 	.then(res => console.log(res))
// 	.catch(err => console.log(555, err))

// Promise.myAll([1, 2, 3])
// 	.then(res => console.log(res))
// 	.catch(err => console.log(555, err))

// Promise.all([1, 2, 3])
// 	.then(res => console.log(res))
// 	.catch(err => console.log(555, err))

const p1 = new Promise((resolve, reject) => {
	resolve('hello')
})
	.then(result => result)
	.catch(e => e)

const p2 = new Promise((resolve, reject) => {
	throw new Error('报错了')
})
	.then(result => result)
	.catch(e => e)

Promise.all([p1, p2]).then(result => console.log(result))
// .catch(e => console.log(e))

// Promise.myAll([p1, p2])
// 	.then(result => console.log(result))
// 	.catch(e => console.log(e))
