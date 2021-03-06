// function quickSort(arr, left, right) {
// 	if (left > right) return
// 	const tmp = arr[left]
// 	let p = left
// 	for (let i = left + 1; i < right + 1; i++) {
// 		if (arr[i] <= tmp) {
// 			//              交换
// 			swap(arr, p + 1, i)
// 			p++
// 		}
// 	}
// 	swap(arr, p, left)
// 	quickSort(arr, left, p - 1)
// 	quickSort(arr, p + 1, right)
// }

// function swap(arr, idx1, idx2) {
// 	const tmp = arr[idx1]
// 	arr[idx1] = arr[idx2]
// 	arr[idx2] = tmp
// }

// function quickSort(arr) {
// 	if (arr.length <= 1) return arr
// 	const left = []
// 	const right = []
// 	const temp = arr[0]
// 	for (let i = 1; i < arr.length; i++) {
// 		if (arr[i] > temp) {
// 			right.push(arr[i])
// 		} else {
// 			left.push(arr[i])
// 		}
// 	}
// 	return [...quickSort(left), temp, ...quickSort(right)]
// }

const quickSort10 = function (arr, left, right) {
	if (left > right) return
	const temp = arr[left]
	let p = left
	for (let i = left + 1; i <= right; i++) {
		if (arr[i] < temp) {
			swap(arr, ++p, i)
		}
	}
	swap(arr, left, p)
	quickSort10(arr, left, p - 1)
	quickSort10(arr, p + 1, right)
}

const swap = function (arr, idx1, idx2) {
	const temp = arr[idx1]
	arr[idx1] = arr[idx2]
	arr[idx2] = temp
}
const arr1 = [3, 4, 2, 5, 6]
quickSort10(arr1, 0, arr1.length - 1)

// quickSort(arr)
console.log(arr1)
