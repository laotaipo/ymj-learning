// 将多次DOM操作合并为1次
const list = document.getElementById('list')

// 创建一个文档片段，此时还没有插入到DOM节点之中
const frog = document.createDocumentFragment()

// 执行插入
for(let i = 0; i < 10; i++) {
    const li = document.createElement('li')
    li.innerHTML = `this is li${i}`
    frog.appendChild(li)
}

list.appendChild(frog)