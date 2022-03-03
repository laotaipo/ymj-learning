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
// import $ from 'jquery';
// $('#imgBox').animate(/* ... */);
// import '~/main.css'
// import '~/main.scss' // 引入 Sass 文件
// import { fn, name, obj } from './a'
// console.log(5435)
// fn()
// console.log(name, obj)

// function fnError() {
//     throw new Error('error')
// }

// fnError()

import { webview } from '@ybc/client-api'
import eruda from 'eruda'
eruda.init()
// console.log(6666, process.env)

// const arr = []
//     // for (let i = o; i < arr.length; i++){
//     //     arr[i] = i * Math.random() * 1000
//     // }
// console.log('崩溃')
// let p = {a: 4}
// p = new Proxy(p, {
//     get: function(obj, prop) {
//         console.log('proxy')
//         const demo = document.getElementById('demo')
//             const pp = document.createElement('p')
//             pp.innerHTML = '崩溃吧111'
//             demo?.appendChild(pp)
//             demo?.appendChild(pp)
//             demo?.appendChild(pp)

//         setInterval(() => {
//             const demo = document.getElementById('demo')
//             const pp = document.createElement('p')
//             pp.innerHTML = '崩溃吧222'
//             demo?.appendChild(pp)
//         }, 10)
//         arr.push(p.a)
//         return p.a
//     }
// });
// console.log(p.a)
// while (true) {
//     arr.push({a: 1})
//     console.log('崩溃吧', arr)
//     const demo = document.getElementById('demo')
//     const p = document.createElement('p')
//     p.innerHTML = '崩溃吧'
//     demo?.appendChild(p)
//     demo?.appendChild(p)
//     demo?.appendChild(p)
//     demo?.appendChild(p)
// }
webview.emitReady()
