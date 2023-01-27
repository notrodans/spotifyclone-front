import { fetcherSSR } from "./fetchUser";
import { IUser, UserModel } from "@services/Auth/AuthService.type";
import * as jwt from "jsonwebtoken";
import { GetServerSideProps } from "next";
import * as nookies from "nookies";

export const getUser: GetServerSideProps = async ctx => {
	try {
		const tokenAccess = nookies.parseCookies(ctx).access;
		const tokenRefresh = nookies.parseCookies(ctx).refresh;
		if (!tokenRefresh) {
			return {
				redirect: {
					destination: "/login",
					permanent: true
				}
			};
		}
		const userTokenData = jwt.decode(tokenAccess) as IUser;
		const [, data] = await fetcherSSR<UserModel>(ctx, "artist/me/" + userTokenData.email);
		if (!data) {
			return {
				redirect: {
					statusCode: 307,
					destination: "/"
				}
			};
		}
		return {
			props: {
				user: { login: data.login, email: data.email }
			}
		};
	} catch (e: any) {
		console.log(e);
	}
};
