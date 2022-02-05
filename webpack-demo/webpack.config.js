const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development', // production
    entry: path.join(__dirname,  'src', 'index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        })
    ],
    // devServer: {
    //     contentBase: path.join(__dirname, 'dist'),
    //     host: 'localhost',      // 默认是localhost
    //     port: 3000,             // 端口
    //     open: true,             // 自动打开浏览器
    //     hot: true,
    // }
}