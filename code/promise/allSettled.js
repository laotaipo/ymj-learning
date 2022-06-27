const p1 = new Promise((resolve, reject) => {
	setTimeout(() => resolve({ a: 1 }), 100)
})

const p2 = new Promise((resolve, reject) => {
	setTimeout(() => resolve(2), 200)
})

const p3 = new Promise((resolve, reject) => {
	setTimeout(() => reject(3), 300)
})

const p = Promise.allSettled([p1, p2, p3])

p.then(item => console.log(item))
