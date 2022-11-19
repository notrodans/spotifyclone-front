import { $axiosInstance } from "@axios/axiosInstance"
import { IAuthData, IUser } from "./AuthService.type"
import { decode } from "jsonwebtoken"

export class AuthService {
	static async register(login: string, email: string, password: string) {
		const { data } = await $axiosInstance.post<IAuthData>("auth/register", {
			login,
			email,
			password
		})
		const { user } = decode(data.accessToken) as { user: IUser }
		return user
	}

	static async login(email: string, password: string) {
		const { data } = await $axiosInstance.post<IAuthData>("auth/login", {
			login: email,
			password
		})
		const { user } = decode(data.accessToken) as { user: IUser }
		return user
	}
}
