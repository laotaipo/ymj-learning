const bt = require('../bt')

const postorder = root => {
    if (!root) return
    const stack = [root]
    const outputStack = []
    while (stack.length > 0) {
        const n = stack.pop()
        outputStack.unshift(n.val)
        if (n.left) stack.push(n.left)
        if (n.right) stack.push(n.right)
    }
    outputStack.forEach(v => console.log(v))
}

postorder(bt)