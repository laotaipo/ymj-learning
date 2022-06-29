const { ipcMain } = require('electron')
const { send: sendMainWindow } = require('./windows/main')
const { create: createControWindow } = require('./windows/control')

module.exports = function () {
	ipcMain.handle('login', async () => {
		// 现mock 返回一个code
		let code = Math.floor(Math.random() * (999999 - 100000)) + 10000
		return code
	})
	ipcMain.on('control', async (e, remoteCode) => {
		// 这里和服务端交互, 先mock
		sendMainWindow('control-state-change', remoteCode, 1)
		createControWindow()
	})
}
