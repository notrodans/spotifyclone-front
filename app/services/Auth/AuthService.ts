import { ITokens, IUser, UserModel } from "./AuthService.type";
import { $axiosClassic, $axiosWithToken, axiosWithTokenSSR } from "@axios/axiosInstance";
import { decode } from "jsonwebtoken";
import { GetServerSidePropsContext, PreviewData } from "next";
import * as nookies from "nookies";
import { ParsedUrlQuery } from "querystring";

export class AuthService {
	static async register(login: string, email: string, password: string): Promise<UserModel> {
		const { data: user } = await $axiosWithToken.post<UserModel>("auth/register", {
			login,
			email,
			password
		});
		return user;
	}

	static async login(email: string, password: string): Promise<IUser> {
		const { data } = await $axiosWithToken.post<ITokens>("auth/login", {
			login: email,
			password
		});
		const user = decode(data.accessToken) as IUser;
		return user;
	}

	static async getNewTokens(
		refreshToken: string,
		ctx?: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
	) {
		const tokens = await $axiosClassic.post<ITokens>("auth/access-token", {
			refreshToken
		});
		if (ctx) {
			nookies.setCookie(ctx, "refresh", tokens.data.refreshToken);
			nookies.setCookie(ctx, "access", tokens.data.accessToken);
		}
		return tokens;
	}
}
