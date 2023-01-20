import audio from "./slices/audio/audio.slice";
import auth from "./slices/auth/auth.slice";
import album from "./slices/uploadAlbum/uploadAlbum.slice";
import { ThunkAction, configureStore } from "@reduxjs/toolkit";
import { Action, combineReducers } from "redux";

export const rootReducer = combineReducers({
	auth,
	album,
	audio
});

export const store = configureStore({
	reducer: rootReducer
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;
