export interface IUser {
	login?: string;
	email: string;
}

export interface UserModel {
	login: string;
	email: string;
	passwordHash: string;
	_id: string;
}

export interface ITokens {
	accessToken: string;
	refreshToken: string;
}

export interface IRegisterResponse {
	login: string;
	email: string;
}

export interface IRegisterFields {
	login: string;
	email: string;
	password: string;
}

export interface ILoginFields {
	login: string;
	password: string;
}
