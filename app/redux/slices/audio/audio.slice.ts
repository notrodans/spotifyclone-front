import { AppState } from "@redux/store"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Track } from "../uploadAlbum/types"
import { IAudioState } from "./types"

const initialState: IAudioState = {
	track: null,
	pause: true,
	volume: 0.3,
	duration: 0,
	currentDuration: 0,
	progress: 0
}

const audioSlice = createSlice({
	name: "audio",
	initialState,
	reducers: {
		setAudio: (state, { payload }: PayloadAction<Track>) => {
			state.track = payload
		},
		setStatus: (state, { payload }: PayloadAction<boolean>) => {
			state.pause = payload
		},
		setDuration: (state, { payload }: PayloadAction<number>) => {
			state.duration = payload
		},
		setCurrentDuration: (state, { payload }: PayloadAction<number>) => {
			state.currentDuration = payload
		},
		setVolume: (state, { payload }: PayloadAction<number>) => {
			state.volume = payload / 100
		},
		setProgress: state => {
			state.progress = (state.currentDuration / state.duration) * 100
		}
	}
})

export const selectAudio = (state: AppState) => state?.audio
export const audioActions = audioSlice.actions
export default audioSlice.reducer
