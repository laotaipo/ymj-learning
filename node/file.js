const fs = require('fs')
const path = require('path')
// fs.access(path.resolve(__dirname, 'c.txt'), fs.constants.F_OK, (err, res) => {
// 	console.log(err)
// 	console.log(res)
// })
// fs.mkdir(path.resolve(__dirname, 'a'), () => {})
// fs.writeFile(path.resolve(__dirname, 'b.txt'), 'lll', (err, res) => {
// 	console.log(res)
// })

fs.readdir(path.resolve(__dirname, 'a'), (err, res) => {
	console.log('---', err, res)
	res.forEach(item =>
		fs.unlink(path.resolve(__dirname, 'a', item), () => {
			console.log(99)
		})
	)
})
