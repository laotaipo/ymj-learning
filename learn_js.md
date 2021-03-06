JS 是解释型语言，js的执行分为解释和执行两个阶段
    解释阶段：词法分析，语法分析，作用域规则确定
    执行阶段：创建执行上下文，执行函数代码，垃圾回收
    js解释阶段便会确定作用域规则，因此作用域在函数定义时就确定了，而不是在函数调用时确定，但执行上下文是在函数执行前确定的。执行上下文最明显的是this指向是执行时确定的，而作用域访问的变量是编写代码的结构决定的
    作用域和执行上下文最大的区别是：执行上下文在运行时确定，随时可能改变；作用域在定义时确定，并且不会改变

函数调用栈 执行上下文
    执行上下文可以理解为函数的执行环境，每一个函数执行时，会给对应的函数创建一个执行环境
    全局上下文在浏览器窗口关闭后出栈
    在函数中，遇到return 能直接终止可执行代码的执行，因此会直接将当前上下文弹出栈
    执行上下文生命周期
        创建阶段：在这个阶段中，执行上下文会分别创建变量对象，确定this指向，以及其他需要的状态
        代码执行阶段：创建完成后，就会开始执行代码，会完成变量的赋值，以及执行其他代码
        销毁阶段：可执行代码执行完毕后，执行上下文出栈，对应的内存空间失去引用，等待被回收
    总结执行上下文
        单线程
        同步执行，只有栈顶的上下文处于执行中，其他上下文需要等待
        全局上下文只有唯一的一个，在浏览器关闭时出栈
        函数的执行上下文个数没有限制
        每次某个函数被调用，就会有一个新的执行上下文为其创建，即使是调用自身的函数也是如此
变量对象
    创建过程
        1-建立argument对象：检查当前上下文中的参数，建立该对象下的属性与属性值
        2-检查当前上下文的函数声明，也就是使用function关键字声名的函数，在变量对象中以函数的名字建立一个属性，属性值为指向该函数所在内存地址的引用
        3-检查当前上下文的变量声明，每找到一个变量声明，就在变量对象中以变量名建立一个属性，属性值为undefined，const/let声明的变量没有赋值，不能提前使用。function声明比var声明的优先级更高一些
    全局上下文的变量对象：浏览器全局对象为window,变量对象也为window
    es6:let const 也是存在变量提升的，但在变量显示赋值之前不能对变量进行读写，否则会报错，这也就是所谓的let 和 const 的暂时性死区
作用域与作用域链
    作用域链是由当前环境与上层环境的一列变量对象组成，我们可以在这个单向通道中，查寻变量的标识符，这样就能访问到上层作用域中的变量，他保证了当前执行环境对符合访问权限的变量和函数的有序访问
    作用域链是在函数声明阶段确认的

闭包
    函数的执行上下文，在执行完毕后，生命周期结束，那么该函数的执行上下文就会失去引用，其占用的内存空间很快会被垃圾回收机制释放，可闭包的存在，会阻止这一过程
    通过闭包，我们可以在其他执行上下文中访问到函数的内部变量
    用途 柯里化 模块化 可以实现方法和属性的私有化

this
    在普通函数中调用
    使用call apply bind
    作为对象方法
    在class方法中
    在箭头函数中
    this取什么值 是在函数执行的时候决定的 不是函数定义的时候决定的
    箭头函数中this取值取的是上级作用域的值
    this不可以被赋值
    真理：如果调用者函数，被某一个对象所拥有，那么该函数调用时，内部this指向该对象。如果函数独立调用，那么该函数内部的this指向undefined 但在非严格模式下，

call  apply  bind
call apply会直接执行 bind会返回一个新函数

闭包
闭包的应用
缓存数据  隐藏数据，只提供API 感觉和Class有些相似

模块
    模块加载方式 CommonJS AMD
        CommonJS 采用同步加载模块，AMD(require.js)和CMD(sea.js)采用异步加载模块,AMD推崇依赖前置，CMD推崇依赖就近、延迟执行
    ES6模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出变量， import和export命令只能在模块的顶层，不能在代码块之中
    CommonJS和AMD模块，都只能在运行时确定这些东西，比如commonJS模块就是对象，输入时必须查找对象属性，没有办法 在编译时做“静态优化”
    ES6模块不是对象，而是通过export命令显示指定输出的代码，再通过import输入
    import
        es6import命令输入的变量是只读的，因为本质是输入接口。也就是说不许在加载模块的脚本里改写接口，但是可以修改例如对象属性。建议凡事输入的变量，都当作完全只读，不要轻易改变它的属性
        ES6模块自动采用严格模式
        import命令有提升效果，会提升到整个模块的头部，首先执行
        由于import是静态执行，所以不能使用表达式和变量这些只有在运行时才能得到结果的语法结构
        import语句会执行所加载的模块 import 'lodash',如果多次import只会执行一次
        import语句是Singleton模式
        目前通过babel转码，require和import可以写在同一模块里，但最好不这样做。因为import在动态解析阶段执行，所以他是一个模块中最早执行的
    export default
        export default的本质是将后面的变量赋值给变量default
    模块的继承
    跨模块常量
        index.js里面 export * from './media'
    动态加载
        import()函数支持动态加载，返回promise
        import()函数可以用在任何地方，不仅仅是模块，非模块脚本也可以使用，它是在运行时执行，也就是说什么时候运行到这一句，就会加载指定模块
        import()类似于Node的require方法，但import()是异步加载require是同步执加载
        import 可放在条件语句中，参数可以是变量或表达式
        import加载模块成功后，这个模块会作为一个对象当作then方法的参数
浏览器模块的加载
    script标签
        默认同步，defer和async属性可以异步加载
        defer和async区别：defer是渲染完再执行，async是下载完就执行。如果有多个defer脚本会按照再在页面出现的顺序顺序加载，而多个async无法保证加载顺序
    加载规则
        浏览器加载es6模块，也使用script标签 但是要加上type="module"
        浏览器对于带有type=module的<script>会采用异步加载，等同于defer
node模块加载
    浏览器现在有两种模块，一种是es6模块，简称ESM，另一种是commonJS，简称CJS
    CommonJS是nodejs专用，与ES6模块不兼容。他们采用不同的加载方案，从nodejs13.2版本开始，nodeJS默认打开了es6模块支持
    nodeJS模块要求es6模块采用 .mjs后缀，nodejs遇到.mjs就会认为是es6模块，默认启用严格模式，如果不希望用.mjs可以在package.json中配置"type": "module"，如果这是还需呀使用nodejs模块，需要把commonjs脚本的后缀名改为.cjs
    总之：.mjs总是以ES6模块加载，.cjs文件总是以commonJS模块加载，.js文件的加载取决于package.json里type字段
    注意：es6模块与commonJS模块尽量不要混用
    package.json的export字段
        优先级高于main
        可以实现子目录别名、main的别名、条件加载（利用.这个别名，可以为es6模块和commonjs模块指定不同的入口）
    commonjs模块加载es6模块
        commonjs的require()命令不能加载es模块，只能用import()方法加载
    es6模块加载commonjs模块
        es6模块的import命令可以加载commonjs模块，但只能整体加载，不能只加载单一输出项，因为es6模块需呀支持静态代码分析
    同时支持两种格式的模块
    内部变量
        es6模块应该是通用的，同一个模块不用修改，就应该可以用在浏览器环境和服务器环境，为此，nodejs规定es6模块中不能使用commonjs模块中特有的变量如：arguments、require、module、exports、__filename、__dirname
循环加载
    commonjs
es6模块和commonJS的差异
    CommonJS模块输出的是一个值的（浅）拷贝，ES6模块输出的是值的引用
        JS引擎对脚本进行静态分析时，遇到import会生成一个只读引用，等到脚本真的执行时，再根据这个只读引用，到被加载的模块里取值
    CommonJS是运行时加载，ES6模块是编译时输出接口
        因为CommonJS加载的是一个对象（即module.exports属性）
    require是同步加载模块，import()是异步加载资源
模块一些零碎的问题
    require重复引用的问题
        缓存策略：nodejs会自动缓存经过require引入的文件，使得下次再引入不需要经过文件系统，而是直接从缓存中读取，不过这种缓存方式是通过文件路径定位的，即使两个文件内容完全一致，但是位于不同路径下，还是会缓存两次
    exports与module.exports的区别
        exports是对module.exports的引用
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
    https://juejin.cn/post/7062155174436929550?utm_source=gold_browser_extension
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
        服务器判断客户端资源，是否和服务器资源一样s
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

webpack 和 babel
    ES6模块化，浏览器暂不支持
    ES6语法，浏览器并不完全支持
    压缩代码、整合代码，让网页加载更快

linux命令
    登录机器ssh work@192.168.10.21
    创建目录 mkdir abc
    删除文件夹 rm -rf abc
    删除文件 rm
    修改文件名 mv index.html index1.html
    移动文件到上级目录 mv index.html ../index1.html
    拷贝 cp a.js a1.js  也可用来移动文件
    新建 touch d.js
    新建 vi d.js
    看文件 vim d.js
    看文件 cat d.js  head d.js tail package.json
    查找文件内容 grep "babel" package.json
    学习 vimtutor

运行环境
    运行环境即浏览器、node
    下载网页代码，渲染出页面，期间会执行若干js
    要保证代码在浏览器中稳定且高效
    加载资源的形式 ：html代码、媒体文件（图片、视频等）、js、css
    加载资源的过程
    渲染页面的过程
    <!-- 下载资源：各个资源类型、下载过程
    渲染页面 -->
    网页加载过程
        DNS解析：域名->ip地址
        浏览器根据IP地址向服务器发起http请求
        服务器处理http请求，并返回给浏览器
        渲染过程
            根据HTML代码生成DOM树
            根据CSS生成CSSOM
            将DOM树和CSSDOM整合成Render Tree
        q：为何建议把css放在head里，为何建议把js放在body最后？
        note：遇到script会停止渲染，img标签如果比较大，不会阻塞渲染
                window.addEventListener('load', function() {}) 页面全部资源加载完成才会执行，包括图片、视频等
                document.addEventListener('DOMContentLoaded, function() {}) DOM渲染完即可执行，此时图片、视频可能还没有加载完
    性能优化
        原则：多使用内存、缓存或其他方法
            减少CPU计算量、减少网络加载耗时
            （适用于所有编程的性能优化--空间换时间）
        让下载更快
            减少资源体积：压缩代码
            减少访问次数：合并代码。SSR服务端渲染、缓存
            使用更快的网络：CDN
        让渲染更快
            CSS放在head,js放在body最下面
            尽早执行js,用DOMContentLoaded触发
            懒加载（图片懒加载、上滑加载更多）
            对DOM查询进行缓存
            频繁DOM操作合并到一起插入DOM结构
            截流throttle 防抖debounce
        缓存：静态资源加hash后缀，根据文件内容计算hash，文件内容不变则hash不变，则url不变
            url不变则会自动触发http缓存机制，返回304
        CDN
        SSR：服务端渲染，将网页和数据一起加载，一起渲染
        非SSR（前后端分离）：先加载网页，再加载数据，再渲染数据
        懒加载：例如img标签先渲染一个很小的预览图，当图片内容漏在屏幕中时将真实的图片路径赋值给src
        防抖：用户输入结束或暂停时，才会触发change事件
        节流：拖拽一个元素时候，要随时拿到该元素被拖拽的位置
            直接用drag事件会频繁触发，很容易导致卡顿
            节流：无论拖拽速度多快，都会每隔100ms触发一次
    安全
        攻击方式
        XSS跨站请求攻击
            场景：一个博客网站，我发表一篇博客，其中嵌入script脚本
                脚本内容：获取cookie，发送到我的服务器（服务器配合跨域）
                发布这篇博客，有人查看它，我轻松收割访问者的cookie
            预防：替换特殊字符，如<变为&lt >变为&gt
                 前端要替换、后端也要替换，都做总不会有错
        XSRF跨站请求伪造
            场景：你正在购物，看中了某个商品，商品id是100
                付费接口是xxx.com/pay?id=100 但没有任何验证
                我是一个攻击者，我看中了一个商品，id是200，我想让你帮我买
                我想你发送一封电子邮件，邮件标标题很吸引人
                但邮件正文隐藏着<img src="xxx.com/pay?id=200">
                你一查看邮件就会帮我购买id是200的商品
                原因：img发起的请求是可以支持跨域的
            预防：使用post接口，因为post接口用img是不通的
                增加验证码，例如密码、短信验证码、指纹等