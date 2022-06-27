Promise.myRace = (...rest) => {
	let ps = rest[0]
	ps = ps.map(p => {
		return !(p instanceof Promise) ? Promise.resolve(p) : p
	})
	return new Promise((resolve, reject) => {
		for (let i = 0; i < ps.length; i++) {
			const p = ps[i]
			p.then(res => resolve(res)).catch(err => reject(err))
		}
		// for (let p of ps) {
		// 	p.then(res => resolve(res)).catch(err => reject(err))
		// }
	})
}

const p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(1)
	}, 3000)
})
const p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(2)
	}, 2000)
})

const p3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject(3)
	}, 4500)
})

let pp = Promise.myRace([
	p1,
	p2,
	p3,
	// () => {
	// 	console.log(99)
	// },
])
pp.then(res => console.log('hhhh', res)).catch(err => console.error(err))

let pr = Promise.race([
	p1,
	p2,
	p3,
	// () => {
	// 	console.log(99)
	// },
])
pr.then(res => console.log('hhhh', res)).catch(err => console.error(err))
