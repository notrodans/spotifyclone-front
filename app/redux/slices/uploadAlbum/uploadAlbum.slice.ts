import { AppState } from "@redux/store"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUploadAlbum, Track } from "./types"

const initialState: IUploadAlbum = {
	tracks: []
}

const uploadAlbum = createSlice({
	name: "album",
	initialState,
	reducers: {
		setTrack: (state, { payload }: PayloadAction<Omit<Track, "id">>) => {
			const { name, ...track } = payload
			const oldTrack = state.tracks.find(() => name === payload.name)
			if (!oldTrack)
				state.tracks.push({
					id: new Date().getTime() + Math.random(),
					name: payload.name.replace(/\.[^/.]+$/, ""),
					...track
				})
		},
		removeTrack: (state, { payload }: PayloadAction<Track>) => {
			state.tracks.filter(track => track.id !== payload.id)
		}
	}
})

export const selectAlbum = (state: AppState) => state?.album
export const uploadAlbumActions = uploadAlbum.actions
export default uploadAlbum.reducer
