class HandlerA {
	handle(typecode) {
		switch (typecode) {
			case 1:
				console.log(1)
				break
			case 2:
				console.log(2)
		}
	}
}
export default new HandlerA()
