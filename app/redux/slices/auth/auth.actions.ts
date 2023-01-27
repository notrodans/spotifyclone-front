import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "@services/Auth/AuthService";
import { ILoginFields, IRegisterFields } from "@services/Auth/AuthService.type";

export const postRegister = createAsyncThunk<void, IRegisterFields>(
	"authAsync/register",
	async ({ login, email, password }, thunkAPI) => {
		try {
			await AuthService.register(login, email, password);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export const postLogin = createAsyncThunk<void, ILoginFields>(
	"authAsync/login",
	async ({ login, password }, thunkAPI) => {
		try {
			await AuthService.login(login, password);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
