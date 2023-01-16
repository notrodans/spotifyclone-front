import { axiosWithTokenSSR } from "@axios/axiosInstance";
import { authActions } from "@redux/slices/auth/auth.slice";
import { wrapper } from "@redux/store";
import { IUser, UserModel } from "@services/Auth/AuthService.type";
import * as jwt from "jsonwebtoken";
import { GetServerSideProps } from "next";
import * as nookies from "nookies";

export const getUser: GetServerSideProps = wrapper.getServerSideProps(store => async ctx => {
	try {
		const $axiosWithTokenSSR = axiosWithTokenSSR(ctx);
		const token = nookies.parseCookies(ctx)?.access;
		if (!token) {
			return {
				redirect: {
					destination: "/login",
					permanent: true
				}
			};
		}
		const user = jwt.decode(token) as IUser;
		const { data: userData } = await $axiosWithTokenSSR.get<UserModel>("artist/me/" + user?.email);
		store.dispatch(authActions.setUser(userData));
		if (userData)
			return {
				props: {
					userData
				}
			};
	} catch (e: any) {
		if (e?.response?.status === 401) {
			return {
				redirect: {
					destination: ctx.resolvedUrl,
					permanent: true
				}
			};
		}
	}
});
