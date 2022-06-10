const graph = require('./graph')

const bds = n => {
    const queue = [n]
    const visited = new Set()
    visited.add(n)
    while (queue.length) {
        const n = queue.shift()
        console.log(n)
        graph[n].forEach(c => {
            if (!visited.has(c)) {
                queue.push(c)
                visited.add(c)
            }
        })
    }
}

bds(2)