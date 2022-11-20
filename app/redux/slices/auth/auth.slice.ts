import { AppState } from "@redux/store"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "@services/Auth/AuthService.type"
import { HYDRATE } from "next-redux-wrapper"
import { postLogin, postRegister } from "./auth.actions"
import { IAuthState } from "./types"
import * as nookies from "nookies"
const initialState: IAuthState = {
	user: null,
	isLoading: false
}

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUser: (state, { payload }: PayloadAction<IUser>) => {
			state.user = payload?.login
				? {
						login: payload.login,
						email: payload.email
				  }
				: null
		},
		logoutUser: state => {
			state.user = null
			nookies.destroyCookie(null, "token")
			window.location.href = "/login"
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
			.addCase(postRegister.fulfilled, (state, { payload: {} }) => {
				state.isLoading = false
			})
			.addCase(postRegister.rejected, state => {
				state.isLoading = "error"
			})
			.addCase(postLogin.pending, state => {
				state.isLoading = true
			})
			.addCase(postLogin.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload
			})
			.addCase(postLogin.rejected, state => {
				state.isLoading = "error"
				state.user = null
			})
	}
})

export const selectAuth = (state: AppState) => state?.auth
export const { logoutUser, setUser } = authSlice.actions
export default authSlice.reducer
