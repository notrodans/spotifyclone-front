import { ITokens, UserModel } from "./AuthService.type";
import { $axiosClassic, axiosWithTokenSSR } from "@axios/axiosInstance";
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

	static async login(email: string, password: string): Promise<void> {
		await $axiosClassic.post<ITokens>("auth/login", {
			login: email,
			password
		});
	}

	static async getNewTokens(ctx?: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) {
		const refreshToken = nookies.parseCookies(ctx).refresh;
		const $axiosWithTokenSSR = axiosWithTokenSSR(ctx);
		if (ctx) {
			nookies.destroyCookie(ctx, "refresh");
			nookies.destroyCookie(ctx, "access");
			const tokens = await $axiosWithTokenSSR.post<ITokens>("auth/refresh", {
				refreshToken
			});
			nookies.setCookie(ctx, "refresh", tokens.data.refreshToken);
			nookies.setCookie(ctx, "access", tokens.data.accessToken);
		} else {
			nookies.destroyCookie(null, "refresh");
			nookies.destroyCookie(null, "access");
			const tokens = await $axiosWithTokenSSR.post<ITokens>("auth/refresh", {
				refreshToken
			});
			nookies.setCookie(null, "refresh", tokens.data.refreshToken);
			nookies.setCookie(null, "access", tokens.data.accessToken);
		}
	}
}
