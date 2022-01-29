// 获取DOM节点
// const div1 = document.getElementById('div1')
// console.log('div1', div1)

// const divList = document.getElementsByTagName('div') // 集合
// console.log('divList.length', divList, divList[0], divList.length)

// const containerList = document.getElementsByClassName('container') // 集合
// console.log('containerList.length', containerList, containerList[0], containerList.length)

// const pList = document.querySelectorAll('p')
// console.log('pList', pList.length, pList)

// const p = document.querySelector('p') // 取第一个
// console.log('p', p)
// p.setAttribute('data-name', 'hh')
// const dataName = p.getAttribute('data-name')
// console.log('dataName', dataName)

// p.className = 'red'
// p.style.offsetWidth =100
// console.log(p.style.offsetWidth)

// 操作DOM节点
const div1 = document.getElementById('div1')
// 添加子节点
const newP = document.createElement('p')
newP.innerHTML = 'this is p1'
div1.appendChild(newP) // 添加新创建的元素，添加到父元素所有子元素的后面

// 移动节点
const p1 = document.getElementById('p1')
div2.appendChild(p1)
// console.log('~~~', p1)

// 获取父元素
console.log(p1.parentNode)

// 获取子元素列表
console.log(div1.childNodes) // 也会获取text节点

// 删除子元素
div1.removeChild(div1.childNodes[2])