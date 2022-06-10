// lru cache

class LRUCache {
	queue = []
	constructor(maxLenth) {
		this.maxLenth = maxLenth
	}
	store = new Map()

	sortQueue(key) {
		const targetIdx = this.queue.findIndex(queueKey => key === queueKey)
		const target = this.queue.splice(targetIdx, 1)
		this.queue.push(target)
	}

	set(key, value) {
		if (this.store.has(key)) {
			this.sortQueue(key)
			this.store.set(key, value)
		} else {
			if (this.queue.length < this.maxLenth) {
				this.store.set(key, value)
				this.queue.push(key)
			} else {
				const oldestKey = this.queue.shift()
				this.store.delete(oldestKey)
				this.store.set(key, value)
				this.queue.push(key)
			}
		}
	}

	get(key) {
		if (this.store.has(key)) {
			this.sortQueue(key)
		}
		return this.store.get(key)
	}
}

const store = new LRUCache(5)
store.set('name0', 'ymj')
store.set('name1', 'ymj')
store.set('name2', 'ymj')
store.set('name3', 'ymj')
store.set('name4', 'ymj')
store.set('name5', 'ymj')
console.log(store.get('name0')) // undefined

store.set('name1', 'ymj1')
store.set('name6', 'ymj6')
console.log(store.get('name1')) // ymj1
console.log(store.get('name2')) // undefined

store.get('name3')
store.set('name7', 'ymj7')
console.log(store.get('name4')) // undefined
