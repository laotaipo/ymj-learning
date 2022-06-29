const path = require('path')
const openAboutWindow = require('about-window').default

const create = () =>
	openAboutWindow({
		icon_path: path.join(__dirname, 'logo.png'),
		package_json_dir: path.resolve(__dirname, '/../../../'),
		cropyright: 'Copyright (c) 2022',
		homepage: '',
	})
module.exports = { create }
