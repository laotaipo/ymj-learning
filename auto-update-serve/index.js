const Koa = require('koa')

const app = new Koa()
const Router = require('koa-router')
const serve = require('koa-static-server')
const router = new Router()
const compireVersions = require('compare-versions')

function getNewVersion(version) {
	if (!version) return null
	let maxVersion = {
		name: '1.0.1',
		pub_date: '2020-02-01T12:26:53+1:00',
		notes: '新增功能AAA',
		url: `http://127.0.0.1:33855/public/yangmingda-1.0.1-mac.zip`,
	}
	if (compireVersions.compare(maxVersion.name, version, '>')) {
		return maxVersion
	}

	return null
}

router.get('/darwin', (ctx, next) => {
	// 处理mac更新
	let { version } = ctx.query
	let newVersion = getNewVersion(version)
	if (newVersion) {
		ctx.body = newVersion
	} else {
		ctx.status = 204
	}
})
app.use(serve({ rootDir: 'public', rootPath: '/public' }))
app.use(router.routes()).use(router.allowedMethods())
app.listen(33855)
