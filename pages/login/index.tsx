import { setUser } from "@redux/slices/auth/auth.slice"
import type { GetServerSideProps, NextPage } from "next"
import * as jwt from "jsonwebtoken"
import * as nookies from "nookies"
import { wrapper } from "@redux/store"
import { IUser } from "@services/Auth/AuthService.type"

import Meta from "@components/SEO/Meta"
import Wrapper from "@layouts/Wrapper"
import LoginComponent from "@components/screens/Login"

interface ILoginPage {
	userData: IUser
}

const LoginPage: NextPage<ILoginPage> = ({ userData }) => (
	<>
		<Meta title='Авторизация' description='LoginPage' />
		<Wrapper userData={userData}>
			<LoginComponent />
		</Wrapper>
	</>
)

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
	store => async ctx => {
		const token = nookies.parseCookies(ctx)?.token
		const data = jwt.decode(token) as { user: IUser }
		const userData = data?.user ? { ...data.user } : null
		store.dispatch(setUser(userData))
		if (userData) {
			return {
				redirect: {
					destination: "/",
					permanent: true
				}
			}
		}
		return {
			props: {
				userData
			}
		}
	}
)

export default LoginPage
