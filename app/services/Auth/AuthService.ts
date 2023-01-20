import { ITokens, IUser, UserModel } from "./AuthService.type";
import { $axiosClassic, axiosWithTokenSSR } from "@axios/axiosInstance";
import { decode } from "jsonwebtoken";
import { GetServerSidePropsContext, PreviewData } from "next";
import * as nookies from "nookies";
import { ParsedUrlQuery } from "querystring";

export class AuthService {
	static async register(login: string, email: string, password: string): Promise<UserModel> {
		const { data: user } = await $axiosClassic.post<UserModel>("auth/register", {
			login,
			email,
			password
		});
		return user;
	}

	static async login(email: string, password: string): Promise<IUser> {
		const { data } = await $axiosClassic.post<ITokens>("auth/login", {
			login: email,
			password
		});
		const user = decode(data.accessToken) as IUser;
		return user;
	}

	static async getNewTokens(ctx?: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) {
		const refreshToken = nookies.parseCookies(ctx)?.refresh;
		const $axiosWithTokenSSR = axiosWithTokenSSR(ctx);
		if (ctx) {
			const tokens = await $axiosWithTokenSSR.post<ITokens>("auth/access-token", {
				refreshToken
			});
			nookies.destroyCookie(ctx, "refresh");
			nookies.destroyCookie(ctx, "access");
			nookies.setCookie(ctx, "refresh", tokens.data.refreshToken);
			nookies.setCookie(ctx, "access", tokens.data.accessToken);
		} else {
			const tokens = await $axiosClassic.post<ITokens>("auth/access-token", {
				refreshToken
			});
			nookies.destroyCookie(null, "refresh");
			nookies.destroyCookie(null, "access");
			nookies.setCookie(null, "refresh", tokens.data.refreshToken);
			nookies.setCookie(null, "access", tokens.data.accessToken);
		}
	}
}
