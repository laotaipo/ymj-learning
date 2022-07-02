function log<T>(value: T): T {
	// console.log(value)
	return value
}

console.log(log(2))
console.log(log('a'))
console.log(log([4, 5]))
console.log(log([4, 'kk']))

type Log = <T>(value: T) => T

const myLog: Log = a => {
	return a
}
console.log(myLog(233))

interface ILog {
	<T>(value: T): T
}

const myLog2: ILog = log
console.log(myLog2('999'))
