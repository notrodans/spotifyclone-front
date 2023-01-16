import { authActions } from "@redux/slices/auth/auth.slice";
import { wrapper } from "@redux/store";
import { IUser } from "@services/Auth/AuthService.type";
import * as jwt from "jsonwebtoken";
import { GetServerSideProps } from "next";
import * as nookies from "nookies";

export const getUserExisted: GetServerSideProps = wrapper.getServerSideProps(store => async ctx => {
	const token = nookies.parseCookies(ctx).access;
	const user = jwt.decode(token) as IUser;
	const userData = user?.email ? { ...user } : null;
	store.dispatch(authActions.setUser(userData));
	if (userData) {
		return {
			redirect: {
				destination: "/",
				permanent: true
			}
		};
	}
	return {
		props: {
			userData
		}
	};
});
