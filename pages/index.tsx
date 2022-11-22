import type { GetServerSideProps, NextPage } from "next"
import * as nookies from "nookies"
import * as jwt from "jsonwebtoken"

import Home from "@components/screens/home/Home"
import { IUser } from "@services/Auth/AuthService.type"
import { wrapper } from "@redux/store"
import { setUser } from "@redux/slices/auth/auth.slice"

interface IHomePage {
	userData: IUser
}

const HomePage: NextPage<IHomePage> = ({ userData }) => {
	return <Home userData={userData} />
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
	store => async ctx => {
		const token = nookies.parseCookies(ctx)?.token
		const data = jwt.decode(token) as { user: IUser }
		const userData = data?.user ? { ...data?.user } : null
		if (!userData) {
			return {
				redirect: {
					destination: "/login",
					permanent: true
				}
			}
		}
		store.dispatch(setUser(userData))
		return {
			props: {
				userData
			}
		}
	}
)

export default HomePage
