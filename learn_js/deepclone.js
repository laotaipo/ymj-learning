const obj1 = {
	age: 280,
	name: 'xxxx',
	address: {
		city: '上海',
	},
	arr: [1, 2, 3],
}

/**
 * 深拷贝
 * @param {*} obj
 */
// function deepclone(obj = {}) {
// 	if (typeof obj !== 'object' || obj == null) return obj

// 	const result = obj instanceof Array ? [] : {}

// 	for (let key in obj) {
// 		// 保证key不是原型的属性
// 		if (obj.hasOwnProperty(key)) {
// 			// 递归
// 			result[key] = deepclone(obj[key])
// 		}
// 	}

// 	return result
// }

const obj2 = deepclone(obj1)
console.log('~~~obj2~~~', obj2, obj1, obj1 === obj2)
function deepclone(obj = {}) {
	if (typeof obj !== 'object' || obj === null) return obj

	let result = obj instanceof Array ? [] : {}

	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			result[key] = deepclone(obj[key])
		}
	}
	return result
}
