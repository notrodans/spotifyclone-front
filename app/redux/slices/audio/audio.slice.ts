import { AppState } from "@redux/store"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { convertTime } from "@util/convertTime"
import { HYDRATE } from "next-redux-wrapper"
import { Track } from "../uploadAlbum/types"
import { IAudioState } from "./types"

const initialState: IAudioState = {
	track: null,
	pause: true,
	volume: 0.3,
	duration: "",
	currentDuration: 0
}

const audioSlice = createSlice({
	name: "audio",
	initialState,
	reducers: {
		setAudio: (state, { payload }: PayloadAction<Track>) => {
			if (payload) {
				state.track = payload
			}
		},
		setStatus: (state, { payload }: PayloadAction<boolean>) => {
			state.pause = payload
		},
		setDuration: (state, { payload }: PayloadAction<number>) => {
			state.duration = convertTime(payload)
		},
		setCurrentDuration: (state, { payload }: PayloadAction<number>) => {
			state.currentDuration = payload
		},
		setVolume: (state, { payload }: PayloadAction<number>) => {
			state.volume = payload / 100
		}
	},
	extraReducers: builder => {
		builder.addCase(HYDRATE, (state, { payload }: any) => ({
			...state,
			...payload.audio
		}))
	}
})

export const selectAudio = (state: AppState) => state?.audio
export const { setAudio, setStatus, setDuration, setCurrentDuration, setVolume } = audioSlice.actions
export default audioSlice.reducer
