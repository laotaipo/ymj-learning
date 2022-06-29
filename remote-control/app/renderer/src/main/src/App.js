import React, { useState, useEffect, useRef } from 'react'
import { ipcRenderer } from 'electron'
import { Menu, MenuItem } from '@electron/remote'
import './App.css'
function App() {
	const [remoteCode, setRemoteCode] = useState('')
	const [localCode, setLocalCode] = useState('')
	const [controlText, setControlText] = useState('')
	const test = useRef('')
	const login = async () => {
		let code = await ipcRenderer.invoke('login')
		setLocalCode(code)
	}
	const startControl = remoteCode => {
		console.log(999, remoteCode)
		ipcRenderer.send('control', remoteCode)
	}
	const handleControlState = (e, name, type) => {
		console.log(88, type, remoteCode)
		let text = ''
		if (type === 1) {
			text = `正在远程控制${name}`
		} else if (type === 2) {
			text = `被${name}控制中`
		}
		setControlText(text)
	}
	const handleContextMenu = e => {
		e.preventDefault()
		const menu = new Menu()
		menu.append(new MenuItem({ label: '复制', role: 'copy' }))
		menu.popup()
	}
	useEffect(() => {
		login()
		ipcRenderer.on('control-state-change', handleControlState)
		setTimeout(function () {
			console.log('jjjj', remoteCode, '*&&', test.current)
		}, 2000)
		return () => {
			ipcRenderer.removeAllListeners('control-state-change', handleControlState)
		}
	}, [])

	return (
		<div className="App">
			{controlText === '' ? (
				<>
					<div>
						你的控制码
						<span onContextMenu={e => handleContextMenu(e)}>{localCode}</span>
					</div>
					<input
						type="text"
						value={remoteCode}
						onChange={e => {
							setRemoteCode(e.target.value)
							test.current = e.target.value
						}}
					></input>
					<button onClick={() => startControl(remoteCode)}>确认</button>
				</>
			) : (
				<div>{controlText}</div>
			)}
		</div>
	)
}

export default App
