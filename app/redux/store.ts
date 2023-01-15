import audio from "./slices/audio/audio.slice";
import auth from "./slices/auth/auth.slice";
import album from "./slices/uploadAlbum/uploadAlbum.slice";
import { ThunkAction, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { Action, combineReducers } from "redux";

export const rootReducer = combineReducers({
	auth,
	album,
	audio
});

export const makeStore = () =>
	configureStore({
		reducer: rootReducer
	});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);
