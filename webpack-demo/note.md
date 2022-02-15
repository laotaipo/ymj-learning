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
    speed-measure-webpack-plugin
    