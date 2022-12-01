import { useAppDispatch, useAppSelector } from "@redux/hooks"
import {
	selectAudio,
	setAudio,
	setCurrentDuration,
	setDuration
} from "@redux/slices/audio/audio.slice"
import { Track } from "@redux/slices/uploadAlbum/types"
import { selectAlbum } from "@redux/slices/uploadAlbum/uploadAlbum.slice"
import { FC, PropsWithChildren, useEffect, useState } from "react"

interface IWrapperApp extends PropsWithChildren {}

const WrapperApp: FC<IWrapperApp> = ({ children }) => {
	const dispatch = useAppDispatch()
	const [audioEl, setAudioEl] = useState<HTMLAudioElement>(null)
	const [audioFile, setAudioFile] = useState<Track>(null)
	const { tracks } = useAppSelector(selectAlbum)
	const { track, pause, volume } = useAppSelector(selectAudio)

	useEffect(() => {
		if (!audioEl) {
			setAudioEl(new Audio())
			dispatch(setAudio(tracks[0]))
			setAudioFile(track)
		}
	}, [tracks, track, audioEl, audioFile, dispatch])

	useEffect(() => {
		if (audioEl && audioEl?.src) {
			audioEl.volume = volume
			audioEl.onloadedmetadata = () => {
				dispatch(setDuration(audioEl.duration))
			}
			audioEl.ontimeupdate = () => {
				dispatch(setCurrentDuration(audioEl.currentTime))
			}
			if (pause) {
				audioEl.pause()
			} else {
				audioEl.play()
			}
		} else if (audioEl) {
			audioEl.src = audioFile?.link
		}
	}, [tracks, audioEl, audioFile, pause, volume, dispatch])

	return <>{children}</>
}

export default WrapperApp
