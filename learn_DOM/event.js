// const btn1 = document.getElementById('btn1')

// btn1.addEventListener('click', f1)

// btn1.addEventListener('click', f2)

// btn1.removeEventListener('click', f2)

// btn1.removeEventListener('click', f2)

// btn1.onclick = function () {
//     console.log('click1')
// }

// btn1.onclick = function () {
//     console.log('click2')
// }


// function f1 (e) {
//     console.log('f1', e)
//     // e.preventDefault()
// }

// function f2 () {
//     console.log('f2')
// }

const body = document.body
body.addEventListener('click', function (event) {
    console.log('body clicked')
    console.log(event.target)
})

const div2 = document.getElementById('div2')
div2.addEventListener('click', function (event) {
    console.log('div2 click')
    console.log(event.target)
})

const p1 = document.getElementById('p1')
p1.addEventListener('click', function (event) {
    console.log('p1 click')
    event.stopPropagation()
    // e.stopP
})