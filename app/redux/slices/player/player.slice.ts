import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

import { IPlayState, StatusType } from './types'
import { AppState } from '@/redux/store'

const initialState: IPlayState = {
	status: 'off',
	name: 'SPACE X',
	nameLink: '/',
	artist: 'August',
	artistLink: '/'
}

const playerSlice = createSlice({
	name: 'player',
	initialState,
	reducers: {
		setStatus: (state, { payload }: PayloadAction<StatusType>) => {
			state.status = payload
		}
	},
	extraReducers: {
		[HYDRATE]: (state, action) => ({
			...state,
			...action.payload.player
		})
	}
})

export const selectPlayer = (state: AppState) => state?.player
export const { setStatus } = playerSlice.actions
export default playerSlice.reducer
