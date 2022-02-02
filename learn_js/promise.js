const url = "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbj-yuantu.fotomore.com%2Fcreative%2Fvcg%2Fnew%2FVCG211363439424.jpg%3FExpires%3D1643621485%26OSSAccessKeyId%3DLTAI2pb9T0vkLPEC%26Signature%3DV7ZL3VtfrWsfGDmJDiahAW3pOgo%253D%26x-oss-process%3Dimage%252Fauto-orient%252C0%252Fsaveexif%252C1%252Fresize%252Cm_lfit%252Ch_1200%252Cw_1200%252Climit_1%252Fsharpen%252C100%252Fquality%252CQ_80%252Fwatermark%252Cg_se%252Cx_0%252Cy_0%252Cimage_d2F0ZXIvdmNnLXdhdGVyLTIwMDAucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLG1fbGZpdCxoXzE3MSx3XzE3MSxsaW1pdF8x%252F&refer=http%3A%2F%2Fbj-yuantu.fotomore.com&app=2002&size=f10000,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645881443&t=78e97de641ffc1d1b29ed03b48d4dae4"

// Promise.resolve().then(() => {
//     console.log(1)
// }).catch(() => {
//     console.log(2)
// }).then(() => {
//     console.log(3)
// }).then(() => {
//     console.log(4)
// })
// // 1 3 4

// Promise.resolve().then(() => {
//     console.log(1)
//     throw new Error('error1')
// }).catch(() => {
//     console.log(2)
// }).then(() => {
//     console.log(3)
// })
// // 1 2 3

// Promise.resolve().then(() => {
//     console.log(1)
//     throw new Error('error1')
// }).catch(() => {
//     console.log(2)
// }).catch(() => {
//     console.log(3)
// })
// // 1 2

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const a = Math.random() * 10
//         if (a > 5) {
//             resolve(a)
//             console.log('a----resolve', a)
//         } else {
//             reject(new Error('error'))
//             console.log('a-----reject', a)
//         }
//     }, 20)
// })

// p.then(a => {
//     console.log('then----', a)
// }).catch(e => {
//     console.log('catch----', e)
// })

// 说明resolve reject后的代码依然会执行

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        const a = Math.random() * 10
        if (a > 5) {
            resolve(a)
            console.log('a----resolve', a)
        } else {
            reject(new Error('error'))
            console.log('a-----reject', a)
        }
    }, 20)
})
p.then(res => {
    console.log('~~~', res)
}).catch(err => {
    throw new Error('fff')
    console.log(err)
}).then(res => {
    console.log('!!!!', res)
})