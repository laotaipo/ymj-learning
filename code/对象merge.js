// 深merge

function mergeObj(obj1, obj2) {
	for (let key in obj2) {
		if (obj2.hasOwnProperty(key)) {
			if (obj2[key] instanceof Array) {
				if (obj1[key] instanceof Array) {
					obj2[key].forEach(val => obj1[key].push(val))
				}
			} else if (obj2[key] && obj2[key] instanceof Object) {
				if (obj1[key] && obj1[key] instanceof Object) {
					obj1[key] = mergeObj(obj1[key], obj2[key])
				} else {
					obj1[key] = obj2[key]
				}
			} else {
				obj1[key] = obj2[key]
			}
		}
	}
	return obj1
}

let o1 = {
	a: 1,
	b: [1, 3, 4],
	c: {
		a: 1,
		b: ['f', 'e', 'd'],
		c: {
			a: 1,
		},
	},
}

let o2 = {
	a: 5,
	b: [6, 7],
	c: {
		o: 'jj',
		c: {
			b: 2,
		},
	},
}

let res = mergeObj(o1, o2)

console.log(res)
// res = {
// 	a: 5,
// 	b: [1, 3, 4, 6, 7],
// 	c: {
// 		a: 1,
// 		b: ['f', 'e', 'd'],
// 		c: {
// 			a: 1,
// 			b: 2,
// 		},
// 		o: 'jj',
// 	},
// }
