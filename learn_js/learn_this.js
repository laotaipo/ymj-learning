function f1 () {
    console.log(this)
}

f1() // window

f1.call({x: 100}) // {x: 100}

const f2 = f1.bind({x: 200})
f2() // {x: 200}


const zhangsan = {
    name: '张三',
    sayHi() {
        const a = 100
        console.log(111, this)
        return function() {
            console.log(222, this, a)
        }
    },
    wait() {
        setTimeout(function() {
            console.log(this)
        })
    },
    waitAgain() {
        setTimeout(() => {
            console.log(this)
        })
    }

}

// zhangsan.sayHi() // zhangsan
// zhangsan.wait() // window
// zhangsan.waitAgain() // zhangsan

// const wait = zhangsan.wait
// wait() // window
const a = 200
console.log(333, this)
const sayHi = zhangsan.sayHi()
sayHi()
