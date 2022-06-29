const { app } = require('electron')
const handleIPC = require('./ipc')
const { create: createMainWindow, show: showMainWindow, close: closeMainWindow, useRemote } = require('./windows/main')
const gotTheLock = app.requestSingleInstanceLock()
if (!gotTheLock) {
	app.quit()
} else {
	app.on('second-instance', () => {
		showMainWindow()
	})
}

app.on('ready', () => {
	createMainWindow()
	useRemote()
	handleIPC()
	require('./trayAndMenu')
})

app.on('before-quit', () => {
	closeMainWindow()
})

// 当应用被激活时发出。 各种操作都可以触发此事件, 例如首次启动应用程序、尝试在应用程序已运行时或单击应用程序的坞站或任务栏图标时重新激活它。
app.on('activate', () => {
	showMainWindow()
})
