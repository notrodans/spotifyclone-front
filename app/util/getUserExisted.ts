import { IUser } from "@services/Auth/AuthService.type";
import * as jwt from "jsonwebtoken";
import { GetServerSideProps } from "next";
import * as nookies from "nookies";

export const getUserExisted: GetServerSideProps = async ctx => {
	const token = nookies.parseCookies(ctx)?.access;
	const user = jwt.decode(token) as IUser;
	if (user) {
		return {
			redirect: {
				destination: "/",
				permanent: true
			}
		};
	}
	return {
		props: {
			user
		}
	};
};
