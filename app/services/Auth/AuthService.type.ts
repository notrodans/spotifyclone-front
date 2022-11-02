export interface IAuthData {
	user: IUser | null
	accessToken?: string
}

export interface IUser {
	login: string
	email: string
}

export interface IRegisterFields {
	login: string
	email: string
	password: string
}

export interface ILoginFields {
	login: string
	password: string
}
