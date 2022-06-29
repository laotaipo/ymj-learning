const path = require('path')
const { BrowserWindow } = require('electron')
let win
function create() {
	win = new BrowserWindow({
		width: 600,
		height: 300,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
			devTools: true,
			nodeIntegration: true,
			enableRemoteModule: true,
		},
	})
	window.loadFile(path.resolve(__dirname, '../renderer/pages/control/index.html'))
}

module.exports = {
	create,
}
