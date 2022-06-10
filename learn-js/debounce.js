const input1 = document.getElementById('input1')
// let timer = null
// input1.addEventListener('keyup', function () {
//     if (timer) clearTimeout(timer)
//     timer = setTimeout(() => {
//         console.log(input1.value)

//         // 清空定时器
//         timer = null
//     }, 500)
//     // console.log('11111', input1.value)
// })

// function debounce(fn, delay = 200) {
// 	let timer = null
// 	return function () {
// 		if (timer) clearTimeout(timer)
// 		timer = setTimeout(() => {
// 			fn.apply(this, arguments)
// 			timer = null
// 		}, delay)
// 	}
// }

let a = 33
input1.addEventListener(
	'keyup',
	debounce(function (e) {
		console.log(5555, input1.value, e, a)
	}, 600)
)
function debounce(fn, delay) {
	let timer = null
	return function () {
		if (timer) clearTimeout(timer)
		timer = setTimeout(() => {
			fn.apply(this, arguments)
			timer = null
		}, delay)
	}
}
