this
在普通函数中调用
使用call apply bind 
作为对象方法
在class方法中
在箭头函数中

this取什么值 是在函数执行的时候决定的 不是函数定义的时候决定的
箭头函数中this取值取的是上级作用域的值

call  apply  bind
call apply会直接执行 bind会返回一个新函数

闭包
闭包的应用
缓存数据  隐藏数据，只提供API 感觉和Class有些相似

异步和单线程
    js是单线程的，同时只能做一件事，浏览器和nodejs已经支持JS启动进程，如Web Worker
    js和DOM渲染共用同一个线程，因为JS可以修改DOM结构
同步和异步的区别？
    异步是基于JS是单线程而产生的，异步不会阻塞代码的执行，同步会阻塞代码的执行
手写Promise加载一张图片？
前端使用异步的场景？

eventloop 
    同步代码一行一行在函数调用栈执行
    遇到异步，先记录下，等待时机（定时、网络请求等）
    时机一到就移入到callbackqueqe里
    如果调用栈为空，eventloop开始工作
    轮训查找任务队列，如果有则移动到函数调用栈执行
    然后继续轮训查找

Promise
三种状态 pending resolved rejected
//