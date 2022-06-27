class MyPromise {
	constructor(executor) {
		this.initVal()
		this.initBind()
		this.onFulfiledCallbacks = []
		this.onRejectedCallbacks = []
		try {
			executor(this.resolve, this.reject)
		} catch (err) {
			this.reject(err)
		}
	}

	initVal() {
		this.PromiseState = 'pending' // 状态
		this.PromiseResult = null // 终值
	}

	initBind() {
		this.resolve = this.resolve.bind(this)
		this.reject = this.reject.bind(this)
		this.then = this.then.bind(this)
	}

	resolve(value) {
		if (this.PromiseState !== 'pending') return
		this.PromiseState = 'fulfilled'
		this.PromiseResult = value
		while (this.onFulfiledCallbacks.length) {
			this.onFulfiledCallbacks.shift()(this.PromiseResult)
		}
	}
	reject(reason) {
		if (this.PromiseState !== 'pending') return
		this.PromiseState = 'rejected'
		this.PromiseResult = reason
		while (this.onRejectedCallbacks.length) {
			this.onRejectedCallbacks.shift()(this.PromiseResult)
		}
	}

	then(onFulfilled, onRejected) {
		onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val
		onRejected =
			typeof onRejected === 'function'
				? onRejected
				: reason => {
						throw reason
				  }
		const thenPromise = new MyPromise((resolve, reject) => {
			const resolvePromise = cb => {
				setTimeout(() => {
					try {
						const x = cb(this.PromiseResult)
						if (x === thenPromise) {
							throw Error('不能返回自身')
						}
						if (x instanceof MyPromise) {
							x.then(resolve, reject)
						} else {
							resolve(x)
						}
					} catch (err) {
						reject(err)
						throw new Error(err)
					}
				})
			}
			if (this.PromiseState === 'fulfilled') {
				resolvePromise(onFulfilled)
			} else if (this.PromiseState === 'rejected') {
				resolvePromise(onRejected)
			} else if (this.PromiseState === 'pending') {
				this.onFulfiledCallbacks.push(resolvePromise.bind(this, onFulfilled))
				this.onRejectedCallbacks.push(resolvePromise.bind(this), onRejected)
			}
		})
		return thenPromise
	}
}

// const test = new MyPromise((resolve, reject) => {
// 	setTimeout(() => resolve(1), 1000)
// })

// test.then(res => res)
// 	.then(res => {
// 		console.log(222, res)
// 		return new MyPromise(resolve => resolve(333))
// 	})
// 	.then(res => console.log(res))
const p = new MyPromise((resolve, reject) => resolve(1)).then(res => console.log(res))
console.log(331)
