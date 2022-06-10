const bt = require('../bt')

const preorder = root => {
    if (!root) return
    const stack = [root]
    while (stack.length > 0) {
        const n = stack.pop()
        console.log(n.val)
        if (n.right) stack.push(n.right)
        if (n.left)stack.push(n.left)
    }
}

preorder(bt)
