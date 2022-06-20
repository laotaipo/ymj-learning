const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
	mode: 'none',
	entry: {
		'large-number': './src/index.js',
		'large-number.min': './src/index.js',
	},
	output: {
		filename: '[name].js',
		library: 'largeNumber', // 打包出来的库的名字
		libraryTarget: 'umd',
		libraryExport: 'default',
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				include: /\.min\.js$/,
			}),
		],
	},
}
