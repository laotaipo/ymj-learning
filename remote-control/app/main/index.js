const { app } = require('electron')
const log = require('electron-log')
const handleIPC = require('./ipc')
const { create: createMainWindow, show: showMainWindow, close: closeMainWindow, useRemote } = require('./windows/main')
const gotTheLock = app.requestSingleInstanceLock()
global['a'] = 1
global['b'] = 2

if (!gotTheLock) {
	app.quit()
} else {
	log.error('error')
	log.warn('warn')
	log.info('info')
	app.on('second-instance', () => {
		showMainWindow()
	})
	// app.on('will-finish-launching', () => {
	// 	require('./updater.js')
	// })
	app.on('ready', () => {
		log.transports.file.fileName = '主进程.log'
		createMainWindow()
		useRemote()
		handleIPC()
		require('./trayAndMenu')
		console.log('****', process.platform)
	})

	app.on('before-quit', () => {
		closeMainWindow()
		log.error('error')
		log.warn('warn')
		log.info('info')
	})

	// 当应用被激活时发出。 各种操作都可以触发此事件, 例如首次启动应用程序、尝试在应用程序已运行时或单击应用程序的坞站或任务栏图标时重新激活它。
	app.on('activate', () => {
		showMainWindow()
		log.error('error')
		log.warn('warn')
		log.info('info')
	})
}
