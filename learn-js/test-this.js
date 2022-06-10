// a = 1
// function foo() {
// 	console.log(this.a)
// }
// const obj = {
// 	a: 10,
// 	bar() {
// 		console.log(this.a)
// 		foo() // 1
// 	},
// }
// obj.bar()

var a = 1
function outer() {
	var a = 2
	function inner() {
		console.log(this.a) // 1
	}
	inner()
}
outer()

// a = 1
// b = 3
// ;(function () {
// 	// console.log(this)
// 	console.log(this.a) // 1
// })()
// function bar() {
// 	var b = 2
// 	;(function () {
// 		// console.log(this)
// 		console.log(this.b) // 2
// 	})()
// }
// bar()
