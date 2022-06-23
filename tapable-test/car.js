const { SyncHook, AsyncSeriesBailHook } = require('tapable')

class Car {
	constructor() {
		this.hooks = {
			accelerate: new SyncHook(['newspeed']),
			brake: new SyncHook(),
			calculateRoutes: new AsyncSeriesBailHook(['source', 'target', 'routesLust']),
		}
	}
}

const myCar = new Car()
// 绑定同步钩子
myCar.hooks.brake.tap('WarningLampPlugin', () => {
	console.log('WarningLampPlugin')
})

myCar.hooks.brake.tap('hhh', () => {
	console.log('hhh')
})

// 绑定同步钩子并传参
myCar.hooks.accelerate.tap('LoggerPlugin', newSpeed => console.log(`Acceleration${newSpeed}`))

// 绑定一个异步Promise钩子
myCar.hooks.calculateRoutes.tapPromise('calculateRoutes tapPromise', (source, target, routesList, callback) => {
	console.log('source', source)
	return new Promise(resolve => {
		setTimeout(() => {
			console.log(`tapPromise to ${source}${target}${routesList}`)
			resolve()
		})
	})
})

myCar.hooks.brake.call()
myCar.hooks.accelerate.call(10)

// 执行异步钩子
myCar.hooks.calculateRoutes.promise('Async', 'hook', 'demo').then(
	() => {
		console.timeEnd('cost')
	},
	err => {
		console.error(err)
		console.timeEnd('cost')
	}
)
