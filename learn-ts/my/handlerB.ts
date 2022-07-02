class HandlerB {
	handle(typecode) {
		switch (typecode) {
			case 11:
				console.log(11)
				break
			case 12:
				console.log(12)
		}
	}
}
export default new HandlerB()
