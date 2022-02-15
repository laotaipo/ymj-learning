// console.log('this is index js')
// const sum = (a, b) => {
//     return a + b
// }

// const res = sum(14, 20)
// console.log(res)

// class Student {
//     constructor(grade) {
//         this.grade = grade
//     }
//     sayHi() {
//         console.log('hi', this.grade)
//     }
// }
// const xiaoMing = new Student(4)
// xiaoMing.sayHi()
import './main.css'
import './main.scss' // 引入 Sass 文件
import { fn, name, obj } from './a'
console.log(5435)
fn()
console.log(name, obj)

function fnError() {
    throw new Error('error')
}

fnError()
