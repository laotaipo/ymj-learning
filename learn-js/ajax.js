// const xhr = new XMLHttpRequest()
// xhr.open('GET', '/data/test.json', true) // true表示异步
// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             // alert(xhr.responseText)
//         }
//     }
// }
// xhr.send(null)

// 手写ajax
function ajax (url) {
    const p = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url)
        xhr.onreadystatechange = function () {
            console.log(xhr.readyState)
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                } else if (xhr.status === 404) {
                    reject(new Error('404 not found'))
                }
            }
        }
        xhr.send(null)
    })
    return p
}

ajax('/data/test1.json').catch(err => {console.error(err)})
