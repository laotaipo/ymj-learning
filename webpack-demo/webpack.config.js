const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const N1WebpackPlugin = require('./src/plugins/No1-webpack-plugin')
console.log(333, process.env.NODE_ENV)

module.exports = {
    mode: 'development', // production
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
    },
    // devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/,
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            // 添加插件
            filename: '[name].[hash:8].css',
        }),
        new N1WebpackPlugin({
            msg: 'hhhhjjwj',
        }),
    ],
    // devServer: {
    //     contentBase: path.join(__dirname, 'dist'),
    //     host: 'localhost',      // 默认是localhost
    //     port: 3000,             // 端口
    //     open: true,             // 自动打开浏览器
    //     hot: true,
    // }
}
