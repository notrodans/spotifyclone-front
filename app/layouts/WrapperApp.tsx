import { useAppDispatch, useAppSelector } from "@redux/hooks"
import { selectAudio, setAudio, setDuration } from "@redux/slices/audio/audio.slice"
import { selectAlbum } from "@redux/slices/uploadAlbum/uploadAlbum.slice"
import { FC, PropsWithChildren, useEffect, useState } from "react"

interface IWrapperApp extends PropsWithChildren { }

const WrapperApp: FC<IWrapperApp> = ({ children }) => {
	const dispatch = useAppDispatch()
	const [audio, setAudioEl] = useState<HTMLAudioElement>(null)
	const { tracks } = useAppSelector(selectAlbum)
	const { track, pause, volume, currentDuration } = useAppSelector(selectAudio)

	useEffect(() => {
		if (!audio) {
			dispatch(setAudio(tracks[0]))
			setAudioEl(new Audio())
		}
	}, [tracks, audio, dispatch])

	useEffect(() => {
		if (audio) {
			audio.src = track?.link
			audio.volume = volume
			dispatch(setDuration(audio.duration))
			if (pause) {
				audio.pause()
			} else {
				audio.play()
			}
		}
	}, [tracks, track, audio, pause, currentDuration, volume])

	useEffect(() => {
		if (audio) {
			audio.currentTime = currentDuration
		}
	}, [audio, currentDuration])

	return <>{children}</>
}

export default WrapperApp
