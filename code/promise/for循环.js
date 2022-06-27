const p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(1)
	}, 100)
})

const p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(2)
	}, 3000)
})

const p3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(3)
	}, 4000)
})

const ps = [p2, p3, p1]

for (let i = 0; i < ps.length; i++) {
	const p = ps[i]
	p.then(res => console.log('for', res))
}

for (let p of ps) {
	p.then(res => console.log('for of', res))
}
ps.forEach(p => p.then(res => console.log('foreach', res)))
ps.map(p => p.then(res => console.log('map', res)))

// for of await 可以让promise按照顺序异步执行
async function test() {
	for (let p of ps) {
		await p.then(res => console.log(res))
	}
}

test()
