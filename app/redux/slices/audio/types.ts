import { Track } from "../uploadAlbum/types"

export interface IAudioState {
	track: Track
	pause: boolean
	volume: number
	duration: number
	currentDuration: number
	progress: number
}
