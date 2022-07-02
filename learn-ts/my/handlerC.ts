class HandlerC {
	handle(typecode) {
		switch (typecode) {
			case 21:
				console.log(21)
				break
			case 22:
				console.log(22)
		}
	}
}
export default new HandlerC()
