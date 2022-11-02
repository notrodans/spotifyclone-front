import { $axiosInstance } from "@axios/axiosInstance"
import { IAuthData } from "./AuthService.type"

export class AuthService {
	static async register(login: string, email: string, password: string) {
		const { data } = await $axiosInstance.post<IAuthData>("auth/register", {
			login,
			email,
			password
		})
		return data
	}

	static async login(email: string, password: string) {
		const { data } = await $axiosInstance.post<IAuthData>("auth/login", {
			login: email,
			password
		})
		return data
	}
}
