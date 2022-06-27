const p1 = new Promise((resolve, reject) => {
	setTimeout(() => resolve(1), 5000)
})

const p2 = new Promise((resolve, reject) => {
	setTimeout(() => resolve(2), 4000)
})

const p3 = new Promise((resolve, reject) => {
	setTimeout(() => reject(3), 500)
})

const pRace = Promise.race([p1, p2, p3])
const pAny = Promise.any([p1, p2, p3])

pRace.then(res => console.log('pRace', res)).catch(err => console.log(err))
pAny.then(res => console.log('pAny', res)).catch(err => console.log(err))
