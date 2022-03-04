function No1WebpackPlugin(options) {
    this.options = options
}

No1WebpackPlugin.prototype.apply = function (compiler) {
    compiler.hooks.beforeCompile.tapAsync('No1WebpackPlugin', () => {
        console.log(999, this.options.msg)
    })
}

module.exports = No1WebpackPlugin
