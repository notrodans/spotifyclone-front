import { AppState } from "@redux/store"
import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"
import { postLogin, postRegister } from "./auth.actions"

import { IAuthState } from "./types"

const initialState: IAuthState = {
	user: typeof window !== "undefined" ? JSON.parse(localStorage.getItem("user")) : null,
	accessToken: typeof window !== "undefined" ? localStorage.getItem("token") : "",
	isLoading: false
}

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logoutUser: state => {
			if (typeof window !== "undefined") {
				state.user = null
				state.accessToken = ""
				localStorage.removeItem("user")
				localStorage.removeItem("token")
			}
		}
	},
	extraReducers: builder => {
		builder
			.addCase(HYDRATE, (state, { payload }: any) => ({
				...state,
				...payload.auth
			}))
			.addCase(postRegister.pending, state => {
				state.isLoading = true
			})
			.addCase(postRegister.fulfilled, (state, { payload: { user } }) => {
				state.isLoading = false
				state.user = user
				if (typeof window !== "undefined") {
					localStorage.setItem("user", JSON.stringify(user))
				}
			})
			.addCase(postRegister.rejected, state => {
				state.isLoading = false
				state.user = null
				state.accessToken = ""
				if (typeof window !== "undefined") {
					localStorage.removeItem("user")
				}
			})
			.addCase(postLogin.pending, state => {
				state.isLoading = true
			})
			.addCase(postLogin.fulfilled, (state, { payload: { user, accessToken } }) => {
				state.isLoading = false
				state.user = user
				state.accessToken = accessToken
				window.localStorage.setItem("token", accessToken)
				window.localStorage.setItem("user", JSON.stringify(user))
			})
			.addCase(postLogin.rejected, state => {
				state.isLoading = false
				state.user = null
				state.accessToken = ""
				window.localStorage.removeItem("token")
				window.localStorage.removeItem("user")
			})
	}
})

export const selectAuth = (state: AppState) => state?.auth
export const { logoutUser } = authSlice.actions
export default authSlice.reducer
