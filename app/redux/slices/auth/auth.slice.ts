import { postLogin, postRegister } from "./auth.actions";
import { IAuthState } from "./types";
import { AppState } from "@redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "@services/Auth/AuthService.type";
import * as nookies from "nookies";

const initialState: IAuthState = {
	user: null,
	isLoading: false
};

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
				: null;
		},
		logoutUser: state => {
			state.user = null;
			nookies.destroyCookie(null, "access");
			nookies.destroyCookie(null, "refresh");
		}
	},
	extraReducers: builder => {
		builder
			.addCase(postRegister.pending, state => {
				state.isLoading = true;
			})
			.addCase(postRegister.fulfilled, state => {
				state.isLoading = false;
			})
			.addCase(postRegister.rejected, state => {
				state.isLoading = false;
			})
			.addCase(postLogin.pending, state => {
				state.isLoading = true;
			})
			.addCase(postLogin.fulfilled, state => {
				state.isLoading = false;
			})
			.addCase(postLogin.rejected, state => {
				state.isLoading = false;
			});
	}
});

export const selectAuth = (state: AppState) => state?.auth;
export const authActions = authSlice.actions;
export default authSlice.reducer;
