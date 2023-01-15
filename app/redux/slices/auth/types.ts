import { IUser } from "@services/Auth/AuthService.type";

export interface IAuthState {
	user: IUser | null;
	isLoading: boolean;
}
