const https = require('https')
const fs = require('fs')
const path = require('path')

function downloadFileAsync(uri, dest) {
	return new Promise((resolve, reject) => {
		// 确保dest路径存在
		const file = fs.createWriteStream(dest)
		let len = 0
		https.get(uri, res => {
			if (res.statusCode !== 200) {
				reject(response.statusCode)
				return
			}

			res.on('end', () => {
				console.log('download end')
			})

			// 进度、超时等

			file.on('finish', () => {
				console.log('finish write file')
				file.close(resolve)
			}).on('error', err => {
				fs.unlink(dest)
				reject(err.message)
			})

			res.on('data', data => {
				len += data.length
				console.log('data===', len)
				/* Calculate progress */
			}).pipe(file)
		})
		// setTimeout(() => {
		// 	file.end()
		// 	throw new Error('kk')
		// }, 3000)
	})
}

downloadFileAsync('https://keynote-pdf.fbcontent.cn/app.18605.88.zip', path.resolve(__dirname, 'z.zip'))
