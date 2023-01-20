export interface IUser {
	email: string;
	login?: string;
}

export interface UserModel {
	email: string;
	_id: string;
	login: string;
	passwordHash: string;
	__v: number;
}

export interface ITokens {
	accessToken: string;
	refreshToken: string;
}

export interface IRegisterResponse {
	email: string;
	login: string;
}

export interface IRegisterFields {
	email: string;
	login: string;
	password: string;
}

export interface ILoginFields {
	login: string;
	password: string;
}
