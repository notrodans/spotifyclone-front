import { AuthService } from "@services/Auth/AuthService";
import axios from "axios";
import { GetServerSidePropsContext, PreviewData } from "next";
import * as nookies from "nookies";
import { ParsedUrlQuery } from "querystring";

export const $axiosClassic = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	withCredentials: true
});

export const $axiosWithToken = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	withCredentials: true
});

$axiosWithToken.interceptors.request.use(config => {
	if (nookies.parseCookies()?.access) {
		config.headers["Authorization"] = "Bearer " + nookies.parseCookies()?.access;
	}
	return config;
});

export const axiosWithTokenSSR = (ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) => {
	const $axiosWithTokenSSR = axios.create({
		baseURL: process.env.NEXT_PUBLIC_API_URL,
		withCredentials: true
	});

	const refreshToken = nookies.parseCookies(ctx)?.refresh;

	$axiosWithTokenSSR.interceptors.request.use(config => {
		config.headers["Authorization"] = "Bearer " + nookies.parseCookies(ctx)?.access;
		return config;
	});

	$axiosWithTokenSSR.interceptors.response.use(
		config => config,
		async error => {
			const originalRequest = error.config;
			if (error.response.status === 401 && error.config && !error.config._isRetry) {
				originalRequest._isRetry = true;
				try {
					await AuthService.getNewTokens(refreshToken, ctx);
					return $axiosWithTokenSSR.request(originalRequest);
				} catch (err) {
					console.log("НЕ АВТОРИЗОВАН");
				}
			}
			throw error;
		}
	);
	return $axiosWithTokenSSR;
};
