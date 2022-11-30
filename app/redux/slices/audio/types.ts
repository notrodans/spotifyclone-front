import { Track } from "../uploadAlbum/types"

export interface IAudioState {
	track: Track
	pause: boolean
	volume: number
	duration: string
	currentDuration: number
}
