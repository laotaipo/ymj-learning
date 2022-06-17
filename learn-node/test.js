const fs = require('fs')
const path = require('path')

// const filePath = path.join(__dirname, 'aa.txt')

// fs.readFile(filePath, function (err, data) {
// 	console.log(data.toString())
// })

// fs.appendFile(filePath, '新数据程序员成长指北456', function (err) {
// 	if (err) {
// 		throw err
// 	}
// 	// 写入成功后读取测试
// 	var data = fs.readFileSync(filePath, 'utf-8')
// 	console.log(data)
// })

// fs.readdir(path.resolve('../learn-node'), function (err, data) {
// 	console.log(data)
// })

fs.rmdir(path.join(__dirname, 'eee'), function (data) {
	console.log(data)
})
