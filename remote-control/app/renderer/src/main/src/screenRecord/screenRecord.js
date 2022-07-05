import * as remote from '@electron/remote'
import fs from 'fs'
import path from 'path'
import * as md5 from 'md5'
import fixWebmMetaInfo from 'fix-webm-metainfo'
const mimeType = 'video/webm;codecs=h264'
class ScreenRecord {
	audioSource = null
	videoSource = null
	combinedSource = null
	videoFile = null
	recorder = null
	fileBits = []

	blobMap = new Map()
	constructor() {
		this.init()
	}
	async init() {
		remote.powerMonitor.on('lock-screen', () => {
			console.log('The system is lock screen')
		})
		remote.powerMonitor.on('unlock-screen', () => {
			console.log('The system is unlock screen')
		})
		console.log('----', remote.systemPreferences.getMediaAccessStatus('microphone'))
		// remote.systemPreferences.askForMediaAccess('microphone')
		this.videoSource = await navigator.mediaDevices.getUserMedia({
			audio: false,
			video: {
				mandatory: {
					chromeMediaSource: 'desktop',
					chromeMediaSourceId: remote.getCurrentWindow().getMediaSourceId(),
				},
			},
		})
		this.audioSource = await navigator.mediaDevices.getUserMedia({
			audio: true,
			video: false,
		})
		// ;(this.audioSource.getAudioTracks() || []).forEach(track => this.audioSource.removeTrack(track))
		this.combinedSource = new MediaStream([
			...this.audioSource.getAudioTracks(),
			...this.videoSource.getVideoTracks(),
		])
		console.log('combinedSource=====', this.combinedSource)
		this.recorder = new MediaRecorder(this.combinedSource, {
			mimeType: mimeType,
			videoBitsPerSecond: 1.5e6,
		})
		console.log('this.recorder====', this.recorder)
		this.recorder.ondataavailable = event => {
			console.log('event---', event, event.data, event.timeStamp)
			this.fileBits.push(event.data)
			console.log('this.fileBits=====', this.fileBits)
		}
	}
	start() {
		const timeslice = 100
		if (timeslice === 0) {
			// 开始录制，并一直存储数据到缓冲区，直到停止
			this.recorder.start()
		} else {
			// 开始录制，并且每timeslice毫秒，触发一次ondataavailable，输出并清空缓冲区（非常重要）
			this.recorder.start(timeslice)
		}
	}
	pause() {}
	resume() {}
	stop() {
		this.recorder.stop()
		return new Promise((resolve, reject) => {
			this.recorder.onstop = async () => {
				this.videoFile = await fixWebmMetaInfo(new Blob([...this.fileBits], { type: mimeType }))
				// this.videoFile = new Blob(this.fileBits, { type: 'video/webm' })
				this.save(this.videoFile, url => resolve(url))
				this.fileBits = []
			}
		})
	}
	save(blob, cb) {
		const fileReader = new FileReader()
		fileReader.onerror = err => {
			console.error(err)
		}
		fileReader.onload = () => {
			const name = `${Date.now()}.webm`
			const filePath = path.resolve(remote.app.getPath('desktop'), name)
			const buffer = Buffer.from(fileReader.result)
			fs.writeFile(filePath, buffer, {}, (err, res) => {
				console.log('filePath===', filePath)
				cb(filePath)
			})
		}
		fileReader.readAsArrayBuffer(blob)
	}
}

export const screenRecord = new ScreenRecord()
