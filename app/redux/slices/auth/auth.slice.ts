import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"

import { IAuthState } from "./types"
import { AppState } from "@/redux/store"

const initialState: IAuthState = {
	name: "",
	password: ""
}

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setName: (state, { payload }: PayloadAction<string>) => {
			state.name = payload
		},
		setPassword: (state, { payload }: PayloadAction<string>) => {
			state.password = payload
		}
	},
	extraReducers: {
		[HYDRATE]: (state, action) => ({
			...state,
			...action.payload.auth
		})
	}
})

export const selectAuth = (state: AppState) => state?.auth
export const { setName, setPassword } = authSlice.actions
export default authSlice.reducer
