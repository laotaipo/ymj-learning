const { autoUpdater, app, dialog } = require('electron')

if (process.platform == 'darwin') {
	autoUpdater.setFeedURL('http://127.0.0.1:33855/darwin?version=' + app.getVersion())
} else {
}

autoUpdater.checkForUpdates()
autoUpdater.on('update-available', () => {
	console.log('update-available')
})

autoUpdater.on('update-downloaded', (e, notes, version) => {
	// 提醒用户更新
	app.whenReady().then(() => {
		let clickId = dialog.showMessageBoxSync({
			type: 'info',
			title: '升级提示',
			message: '已为你升级到最新版， 是否立即体验' + version,
			buttons: ['马上升级', '手动重启'],
			cancelId: 1,
		})
		if (clickId === 0) {
			autoUpdater.quitAndInstall()
			app.quit()
		}
	})
})

autoUpdater.on('error', err => {
	console.log('error', err)
})
