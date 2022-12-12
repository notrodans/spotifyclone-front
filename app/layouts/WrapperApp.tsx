import { useActions } from "@hooks/useActions"
import { useAppSelector } from "@redux/hooks"
import { selectAudio } from "@redux/slices/audio/audio.slice"
import { selectAlbum } from "@redux/slices/uploadAlbum/uploadAlbum.slice"
import { FC, PropsWithChildren, useEffect, useState } from "react"

interface IWrapperApp extends PropsWithChildren {}

const WrapperApp: FC<IWrapperApp> = ({ children }) => {
	const { setAudio, setDuration, setCurrentDuration, setProgress } = useActions()
	const [audioEl, setAudioEl] = useState<HTMLAudioElement>(null)
	const { tracks } = useAppSelector(selectAlbum)
	const { track, pause, volume } = useAppSelector(selectAudio)

	useEffect(() => {
		if (!audioEl) {
			setAudioEl(new Audio())
			setAudio(tracks[0])
		}
	}, [tracks, audioEl, setAudio])

	useEffect(() => {
		if (audioEl) {
			audioEl.onloadedmetadata = () => {
				setDuration(audioEl.duration)
			}
		}
	}, [audioEl, setDuration])

	useEffect(() => {
		if (audioEl && audioEl?.src) {
			audioEl.volume = volume
			audioEl.ontimeupdate = () => {
				setCurrentDuration(audioEl?.currentTime)
				setProgress()
			}
			if (pause) {
				audioEl.pause()
			} else {
				audioEl.play()
			}
		} else {
			if (audioEl && track) {
				audioEl.src = track.link
				console.log(audioEl, track.link)
			}
		}
	}, [tracks, audioEl, pause, volume, track, setCurrentDuration, setProgress])

	return <>{children}</>
}

export default WrapperApp
