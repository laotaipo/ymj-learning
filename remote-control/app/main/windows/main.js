const path = require('path')
const { BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')
let win
let willQuitApp = false
function create() {
	win = new BrowserWindow({
		width: 900,
		height: 600,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
			devTools: true,
			nodeIntegration: true,
			enableRemoteModule: true,
			webviewTag: true, //开启webview标签渲染
		},
	})
	win.on('close', e => {
		if (willQuitApp) {
			win = null
		} else {
			e.preventDefault()
			win.hide()
		}
	})
	if (isDev) {
		win.loadURL('http://localhost:3000')
	} else {
		window.loadFile(path.resolve(__dirname, '../renderer/pages/main/index.html'))
	}
}

function send(channel, ...args) {
	win.webContents.send(channel, ...args)
}
function show() {
	win.show()
}

function close() {
	willQuitApp = true
	win.close()
}

function useRemote() {
	require('@electron/remote/main').initialize()
	require('@electron/remote/main').enable(win.webContents)
}

module.exports = {
	create,
	send,
	show,
	close,
	useRemote,
}
