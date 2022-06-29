if (process.platform === 'darwin') {
	require('./darwin.js')
} else if (process.platform === 'win32') {
	require('./window.js')
} else {
	// 先不处理
}
