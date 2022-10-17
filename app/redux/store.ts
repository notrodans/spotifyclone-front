import { ThunkAction, configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { Action, combineReducers } from 'redux'

import auth from './slices/auth/auth.slice'
import player from './slices/player/player.slice'

const rootReducer = combineReducers({
	auth,
	player
})

export const makeStore = () =>
	configureStore({
		reducer: rootReducer,
		devTools: true
	})

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>

export const wrapper = createWrapper<AppStore>(makeStore)
