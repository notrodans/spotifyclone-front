import type { GetServerSideProps, NextPage } from "next"
import * as nookies from "nookies"
import * as jwt from "jsonwebtoken"

import { IUser } from "@services/Auth/AuthService.type"
import { wrapper } from "@redux/store"
import { authActions } from "@redux/slices/auth/auth.slice"
import Wrapper from "@layouts/Wrapper"
import Meta from "@components/SEO/Meta"
import HomeComponent from "@components/screens/Home"

interface IHomePage {
	userData: IUser
}

const HomePage: NextPage<IHomePage> = ({ userData }) => {
	return (
		<>
			<Meta title='Главная' description='GeneralPage' />
			<Wrapper userData={userData}>
				<HomeComponent />
			</Wrapper>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
	store => async ctx => {
		const token = nookies.parseCookies(ctx)?.token
		const data = jwt.decode(token) as { user: IUser }
		const userData = data?.user ? { ...data.user } : null
		if (!userData) {
			return {
				redirect: {
					destination: "/login",
					permanent: true
				}
			}
		}
		store.dispatch(authActions.setUser(userData))
		return {
			props: {
				userData
			}
		}
	}
)

export default HomePage
