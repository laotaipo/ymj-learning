import React, { useState, useEffect, useRef } from 'react'
import { ipcRenderer } from 'electron'
import * as remote from '@electron/remote'
import log from 'electron-log'
import { getHeapStatistics } from 'process'

import './App.css'
import { screenRecord } from './screenRecord/screenRecord'
import fs from 'fs'
const { Menu, MenuItem } = remote
console.log(8888, remote.getGlobal('a'))
const url =
	'file:///Users/xiaohuawen/Documents/ymj-learning/remote-control/app/renderer/src/main/src/screenRecord/index.html'
function App() {
	const [remoteCode, setRemoteCode] = useState('')
	const [localCode, setLocalCode] = useState('')
	const [controlText, setControlText] = useState('')
	const [videoUrl, setVideoUrl] = useState('')
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
	const startScreenRecord = () => {
		console.log('开始录屏')
		screenRecord.start()
	}
	const stopScreenRecord = async () => {
		console.log('结束录屏')
		const url = await screenRecord.stop()
		console.log('---r----', url)
		setVideoUrl(url)
	}
	const deleteFile = () => {
		// console.log()
		fs.unlink('/Users/xiaohuawen/Desktop/hostskkk', err => {
			console.log(err)
		})
	}
	// const worker = new WebWorker()
	useEffect(() => {
		const aaa = getHeapStatistics()
		console.log('aaa=====', aaa)
		log.error('renderer error')
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
			<img
				src={
					'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0713%252F8402c662j00qw5rb6002fd200u000mhg00420031.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659446678&t=7aadbdc1ccd867bac8aced00ac999b1b'
				}
			></img>
			<img
				src={
					'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0713%252F8402c662j00qw5rb6002fd200u000mhg00420031.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659446678&t=7aadbdc1ccd867bac8aced00ac999b1b'
				}
			></img>
			{/* <webview className="webview" id="foo" src={url}></webview> */}
			{/* <video width="320" height="240" controls>
				<source src="/Users/xiaohuawen/Desktop/1656770989694618.mp4" type="video/mp4" />
			</video> */}
			{/* <video width="320" height="240" controls>
				<source src={blobU} type="video/webm" />
			</video> */}
			<button onClick={startScreenRecord}>开始录屏</button>
			<button onClick={stopScreenRecord}>结束录屏</button>
			<button onClick={deleteFile}>删除</button>
			{videoUrl && (
				<video width="320" height="240" controls>
					<source src={videoUrl} type="video/webm" />
				</video>
			)}
			{/* {controlText === '' ? (
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
			)} */}
		</div>
	)
}

export default App
