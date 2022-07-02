import handlerA from './handlerA'
import handlerB from './handlerB'
import handlerC from './handlerC'

class Manager {
	getGroup(code) {
		if (code >= 0 && code <= 10) {
			return 1
		} else if (code > 10 && code < 20) {
			return 2
		} else if (code >= 20 && code <= 30) {
			return 3
		}
	}
	handle(code) {
		const codeGroup = this.getGroup(code)
		console.log(codeGroup)
		switch (codeGroup) {
			case 1:
				handlerA.handle(code)
				break
			case 2:
				handlerB.handle(code)
				break
			case 3:
				handlerC.handle(code)
				break
		}
	}
}

const manager = new Manager()
manager.handle(2)
