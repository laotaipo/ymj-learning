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
    如果调用栈为空
    先执行当前的微任务队列
    尝试DOM渲染
    eventloop开始工作
    轮训查找任务队列，如果有则移动到函数调用栈执行
    然后继续轮训查找

Promise
    三种状态 pending fulfilled rejected
    只能pending -> fulfilled  pending -> rejected 变化不可逆
    then正常返回fulfilled,里面有报错则返回rejected
    catch正常返回fulfilled,里面有报错则返回rejected

async await
    执行async函数，返回的是Promise对象
    await相当于Promise的then await后面可以跟一个promise async函数的执行 数/字符串...
    可以用try catch 捕获异常 await后面跟的promise如果是reject 则后面的代码不会执行
    await语句 后面行的代码都可以当作异步的callback,在执行async方法时，await语句前面的都可以看作是同步执行的，在一些场景题里要注意

for of 常用于异步的遍历

宏任务macroTask 微任务microTask
    宏：setTimeout setInterval Ajax DOM事件
    微：Promise async/await
    微任务的执行时机比宏任务早，宏任务在DOM渲染后触发，微任务在DOM渲染前触发
        微任务是ES6语法规定
        宏任务是浏览器规定
eventloop和DOM渲染
    每次函数调用栈清空，即同步任务执行完
    都是DOM渲染的机会，DOM结构如果有改变则重新渲染
    然后再去触发下一次eventloop
