import { IAuthData } from "@services/Auth/AuthService.type"

export interface IAuthState extends IAuthData {
	isLoading: boolean
}
