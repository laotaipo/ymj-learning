const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 费时分析
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
// 查看打包结果
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// 压缩css
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const smp = new SpeedMeasurePlugin()
const config = {
    mode: 'production',
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.join(__dirname, 'dist'),
        publicPath: './',
    },
    devtool: 'source-map',
    resolve: {
        alias: {
            '~': path.join(__dirname, 'src'),
            '@': path.join(__dirname, 'src'),
            components: path.join(__dirname, 'src/components'),
        },
        extensions: ['.ts', '...'],
        modules: [path.join(__dirname, 'src'), path.join(__dirname, 'node_modules')],
    },
    externals: {
        jquery: 'jQuery',
    },
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
                    'cache-loader',
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
        new CleanWebpackPlugin(), // 引入插件
        new MiniCssExtractPlugin({
            // 添加插件
            filename: '[name].[hash:8].css',
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'disabled', // 不启动展示打包报告的http服务器
            generateStatsFile: true, // 是否生成stats.json文件
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            // 添加 css 压缩配置
            new OptimizeCssAssetsPlugin({}),
            new TerserPlugin({}),
        ],
    },
}

module.exports = () => {
    return smp.wrap(config)
}
