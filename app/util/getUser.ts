import { axiosWithTokenSSR } from "@axios/axiosInstance";
import { authActions } from "@redux/slices/auth/auth.slice";
import { wrapper } from "@redux/store";
import { IUser, UserModel } from "@services/Auth/AuthService.type";
import * as jwt from "jsonwebtoken";
import { GetServerSideProps } from "next";
import * as nookies from "nookies";

export const getUser: GetServerSideProps = wrapper.getServerSideProps(store => async ctx => {
	try {
		const token = nookies.parseCookies(ctx)?.access;
		const user = jwt.decode(token) as IUser;
		if (!token) {
			return {
				redirect: {
					destination: "/login",
					permanent: true
				}
			};
		}
		const $axiosWithTokenSSR = axiosWithTokenSSR(ctx);
		const { data: userData } = await $axiosWithTokenSSR.get<UserModel>("auth/me/" + user.email);
		if (!userData) {
			return {
				redirect: {
					destination: "/login",
					permanent: true
				}
			};
		}
		store.dispatch(authActions.setUser(userData));
		return {
			props: {
				userData
			}
		};
	} catch (e) {
		console.log(e);
	}
});
