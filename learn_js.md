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

XMLHttpRequest
    xhr.readyState
        0 未初始化 还没有调用send方法
        1 载入 已调用send方法，正在发送请求
        2 载入完成 send方法执行完成，已接收到全部响应内容
        3 交互 正在解析响应内容
        4 完成 响应内容解析完成，可以在客户端调用
    xhr.status
        2XX 成功处理请求
        3XX 需要重定向，浏览器直接跳转，如301 302 304
            301永久重定向 302临时重定向 304资源未改变返回浏览器缓存资源
        4XX 客户端请求错误，如404 403
            403客户端没有权限
        5XX 服务端错误

    同源策略
        ajax请求时，浏览器要求当前网页和server必须同源（安全）
        同源：协议、域名、端口三者必须一致
        加载图片、css、js可无视同源策略

    跨域
        所有的跨域都必须经过server端允许和配合
        未经server端允许就实现跨域，说明浏览器有漏洞，危险信号

    JSONP
        <script>可绕过跨域限制
        服务器可以任意动态拼接数据返回
        所以<script>就可以获得跨域的数据，只要服务端愿意返回

    CORS - 服务端设置http header

存储
    cookie
        本身用于浏览器和server通讯，被借用到本地存储
        可用document.cookie = '...'来修改
        缺点：存储大小，最大4KB；http请求时需要发送到服务端，增加请求数据量；只能用document.cookie = '...'来修改，简陋
    localStorage,sessionStorage 最大可存储5M
        API简易 setItem getItem
        不会随着http请求发送出去
    localStorage 数据会永久存储，除非代码或手动删除
    sessionStorage 数据只会存在于当前会话，浏览器关闭则会清空

http
    1XX 服务器收到请求
    2XX 请求成功 如200
    3XX 重定向 如302
    4XX 客户端错误 如404
    5XX 服务端错误 如500
    301 永久重定向 （配合location 浏览器自动处理）
    302 临时重定向 （配合location 浏览器自动处理）
    307 ？？？
    304 资源未被修改
    404 资源未被找到
    403 没有权限
    500 服务器错误
    504 网关超时
    methods
        get post patch put delete
    Restful API
        一种新的API设计方法（早已推广使用）
        传统的API设计：把每个url当作一个功能
        RestfulAPI：把每个url当作一个唯一的资源
            尽量不使用url参数 传统API设计 /api/list?pageIndex=2  Restful API设计 /api/list/2
            用method表示操作类型
    headers
        request headers
            Accept 浏览器可接收的数据格式
            Accept-Encoding 浏览器可接收的压缩算法，如gzip
            Accept-Language 浏览器可接收的语言，如zh-CN
            Connection: keep-alive 一次TCP连接重复使用
            cookie
            HOST 请求地址的域名
            User-Agent 浏览器信息
            Content-type 发送数据的格式 如application/json 一般get请求没有这个header
        response headers
            Content-type 返回的数据格式 如application/json
            Content-length 返回的数据大小，多少字节
            Content-Encoding 返回数据的压缩算法 如gzip
            Set-Cookie 服务端向客户端设置cookie使用 用于在客户端创建一个Cookie
        自定义header
        缓存相关headers
            Catch-Control
            Expires
            Last-Modified
            If-Modified-Since
            Etag
            If-None-Match
    强制缓存
        Cache-Control 在response headers中，控制强制缓存的逻辑，例：Cache-Control: max-age=31536000（单位秒）
        Cache-Control的值
            max-age 缓存最大过期时间
            no-cache 不用强制缓存
            no-store 不用强制缓存 ，也不用服务端做缓存
            private
            public
        Expires 在response header中，同为控制缓存过期，已被Cache-Control代替
    协商缓存
        服务端缓存策略
        服务器判断客户端资源，是否和服务器资源一样
        一致则返回304，否则返回200和最新的资源
        资源标识
            在response headers中，有两种
            Last-Modified 资源的最后修改时间，If-Modified-Since 在request headers中
            Etag 资源的唯一标识（一个字符串，类似人类的指纹），If-None-Match 在request headers中
            Last-Modified、Etag共存会优先使用Etag，因为Last-Modified只能精确到秒级
            如果资源被重复生成而内容不变，Etag也不变 更高效一些
    三种刷新操作
        正常操作：地址栏树输入url 跳转链接 前进后退等
        手动刷新：F5、点击刷新按钮、右击菜单刷新
        强制刷新：ctrl + F5
    正常操作：强制缓存有效、协商缓存有效
    手动刷新：强制缓存失效、协商缓存有效
    强制刷新：强制缓存失效、协商缓存失效
