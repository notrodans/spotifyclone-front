import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "@services/Auth/AuthService";
import { ILoginFields, IRegisterFields, IUser, UserModel } from "@services/Auth/AuthService.type";

export const postRegister = createAsyncThunk<UserModel, IRegisterFields>(
	"authAsync/register",
	async ({ login, email, password }, thunkAPI) => {
		try {
			const response = await AuthService.register(login, email, password);
			return response;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export const postLogin = createAsyncThunk<IUser, ILoginFields>(
	"authAsync/login",
	async ({ login, password }, thunkAPI) => {
		try {
			const response = await AuthService.login(login, password);
			return response;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
