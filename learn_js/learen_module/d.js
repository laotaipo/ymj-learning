export let a = 1
export let o  =  {
    a: 2,
    b: 3,
    c: [1, 2, 3],
    d: {
        aa: 2
    }
}

export function getOa() {
    console.log(o, o.a, o.c,  o.d)
}


setTimeout(() => {
    o.a = 'iiii'
    a = 'ppp'
    console.log('timeout', o, a)
}, 10)