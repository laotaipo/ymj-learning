webpack是一个静态模块打包工具，它会在内部从一个或多个入口构建一个依赖图，然后将你项目中所需的每个模块组合成一个或多个bundles，它们均为静态资源，用于展示你的内容

核心概念
入口（entry）
    描述入口的对象
        dependOn：当前入口所依赖的入口。它必须在入口被加载前被加载
        fileName：指定要输出的文件名称
        import：启动时需加载的模块
        library：指定lobrary选项，为当前entry构建一个library
        runtime：运行时的chunk名字
        publicPath：当该入口的输出文件在浏览器中被引用时，为他们指定一个公共的url地址
输出（output）
loader
    webpack只能理解JavaScript和json文件，这是webpack开箱即用的能力，loader让webpack去处理其他类型的文件，并将它们转为有效的模块，以供应用程序使用，以及被添加到依赖图中
    loader有两个属性test：识别出哪些文件会被转换，use：定义在转换时用哪个loader
插件（plugin）
    插件可以用来扩展webpack能力，如打包优化、资源管理、注入环境变量等.plugin可以贯穿webpack打包的生命周期，执行不同的任务
模式（mode）
    development, production 或 none
浏览器兼容性
    Webpack 支持所有符合 ES5 标准 的浏览器（不支持 IE8 及以下版本）。webpack 的 import() 和 require.ensure() 需要 Promise。如果你想要支持旧版本浏览器，在使用这些表达式之前，还需要 提前加载 polyfill。
环境(environment)
    Webpack 5 运行于 Node.js v10.13.0+ 的版本。

本地开发和部署线上通常有不同的需求
本地环境
    需要更快的构建速度
    需要打印debug信息
    需要live reload 或 hot reload
    需要sourcemap 方便定位问题
生产环境
    需要更小的体积 代码压缩+tree-shaking
    需要进行代码分割
    需要压缩图片体积

hash	每次构建生成的唯一 hash 值
chunkhash	根据 chunk 生成 hash 值
contenthash	根据文件内容生成hash 值

优化构建速度
    speed-measure-webpack-plugin 查看耗时
优化resolve配置
    alias，用于创建别名，简化引用
    extensions，引入模块时如果不带扩展名，那么 webpack 就会按照 extensions 配置的数组从左到右的顺序去尝试解析模块
    modules:告诉webpack解析模块时应该搜索的目录
externals
    提供了从输出的 bundle 中排除依赖的方法
缩小范围
    在配置loader的时候需更精确的指定loader作用的目录或者需要排除的目录
    include：符合条件的模块进行解析
    exclude：排除符合条件的模块，不解析
    exclude优先级更高
    noParse：不需要解析依赖的第三方大型库
    IgnorePlugin
    多进程配置
        thread-loader
利用缓存：利用缓存可以大大提升重复构建的速度
    babel-loader 开启缓存
    catch-loader
        缓存一些性能开销较大的loader的处理结果
        缓存位置：node_modules/.cache/cache-loader
    catch：持久化缓存
优化构建结果
    webpack-bundle-analyzer
    压缩css optimize-css-assets-webpack-plugin
    压缩js  terser-webpack-plugin webpack5已内置，无需额外安装
    清除无用的css       purgecss-webpack-plugin
    tree-shaking
        剔除没有使用的代码，降低包体积
    Scope Hoisting
        作用域提升，原理是将多个模块放在同一个作用域下，并重命名防止命名冲突，通过这种方式可以减少函数声明和内存开销。webpack 默认支持，在生产环境下默认开启
        只支持 es6 代码
优化运行时体验
    提升首屏的加载速度，降低首屏加载文件体积，预加载或按需加载
    入口点分割，配置多个打包入口，多页打包
    splitChunks 分包配置

自定义插件
    compiler对象代表完整的webpack配置环境，这个对象在启动webpack时一次性建立，并配置好所有可操作的设置，包括option,loader和plugin，在webpack环境中应用一个插件时，插件将收到此complier对象的引用。可以用它来访问webpack主环境
    compilation对象代表了一次资源版本构建，当运行webpack中间件时，每当检测到一个文件变化，就会创建一个新的compilation，从而生成一组新的编译资源。一个compilation对象表现了当前的模块资源、编译生成资源、变化的文件、以及被跟踪依赖的状态信息，compilation对象也提供了很多关键时机的回调，以供插件自定义处理时选择使用