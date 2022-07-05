const path = require('path')
const glob = require('glob')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const context = process.env.CONTEXT || process.cwd()

const regNodeModules = /node_modules/
const cacheGroups = {
	vendors: {
		test: regNodeModules,
		name: 'vendors',
		minChunks: 5,
		priority: -10,
	},
	common: {
		test: module => !regNodeModules.test(module.context),
		name: 'common',
		minChunks: 5,
		priority: -20,
		reuseExistingChunk: true,
	},
}

const entryFileName = 'entry.ts'
const entryPath = 'src/pages'
const entryPattern = `**/${entryFileName}`
const cwd = path.resolve(context, entryPath)
const pagesConfig = {}
glob.sync(entryPattern, { cwd }).forEach(page => {
	const key = page.replace(`/${entryFileName}`, '')
	const entry = `${entryPath}/${page}`
	const fileName = `${key}.html`
	const chunks = Object.keys(cacheGroups).concat([key])
	// const chunks = [key]
	pagesConfig[key] = {
		entry,
		fileName,
		chunks,
	}
})
console.log(pagesConfig)
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	pages: pagesConfig,
	chainWebpack: config => {
		config.optimization.splitChunks({
			chunks: 'all',
			name: false,
			minSize: 20000,
			cacheGroups: {
				...cacheGroups,
				default: false,
			},
		})
		config.plugin('analyzer').use(BundleAnalyzerPlugin, [
			{
				analyzerMode: 'static',
				reportFilename: 'report.html',
				openAnalyzer: false,
			},
		])
	},
})
