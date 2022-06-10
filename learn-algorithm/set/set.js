let mySet = new Set()

mySet.add(1)
mySet.add(5)
mySet.add(5)
mySet.add('some text')
let o = { a: 1, b: 2 }
mySet.add(o)
mySet.add({a: 1, b: 2})

const has = mySet.has({a: 1, b: 2})
const hasO = mySet.has(o)

console.log(has, hasO)
mySet.delete(5)

console.log(mySet, mySet.entries(), mySet.keys())

// 迭代
for (let item of mySet) console.log(item)

const mySet2 = new Set([1, 2, 3, 4])
//  求交集
const intersection = new Set([...mySet].filter(item => mySet2.has(item)))
console.log('intersection', intersection)

// 求差集
const difference = new Set([...mySet].filter(item => !mySet2.has(item)))
console.log('difference', difference)
