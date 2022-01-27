interface A {
    name: string
    eat: (a: string) => void
}

interface B {
    age: number
    eat?: () => void
}

class CC implements A, B {
    name: string = 'rtt'
    age: number= 23
    eat (a: string)  {
        console.log(555)
    }
    say ()  {
        console.log('say')
    }
}

const a = new CC()
a.eat('www')