const p1 = new Promise((resolve, reject) => {
	setTimeout(() => resolve(1), 1000)
})

const p2 = new Promise((resolve, reject) => {
	setTimeout(() => resolve(2), 2000)
})

const p3 = new Promise((resolve, reject) => {
	setTimeout(() => resolve(3), 3000)
})

// Promise.all([p1, p2, p3]).then(([r1, r2, r3]) => console.log(r1, r2, r3))
const ps = [p1, p2, p3]

for (let i = 0; i < ps.length; i++) {
	const f1 = async function () {
		const res = await ps[i]
		console.log(res)
	}
	f1()
}
