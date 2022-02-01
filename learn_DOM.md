DOM本质 一个树
节点操作
    document.getElementBtId('div1') // 元素
    document.querySelectorAll('p') // 集合
    document.querySelector('p) // 第一个满足条件的元素
    property 修改对象属性，不会体现到html中，例如设置p.style.offsetWidth p.className
    nodeName 标签名称 nodeType node类型
    attribute 设置DOM节点的属性，会修改标签结构 getAttribute/setAttribute
    property和attribute都可能会引起DOM重新渲染
DOM结构操作
    新增/插入节点
    获取子元素列表，获取父元素
    删除子元素
DOM性能
    对DOM查询做缓存
    将频繁操作改为一次性操作 document.createDocumentFragment 创建文档片段

BOM Browser Object Model 浏览器对象模型
    navigator navigator.userAgent
    screen
    location
    history  history.back() forward() 前进后退

事件
    事件绑定
    事件冒泡
