import { authActions } from "@redux/slices/auth/auth.slice"
import type { GetServerSideProps, NextPage } from "next"
import * as jwt from "jsonwebtoken"
import * as nookies from "nookies"
import { wrapper } from "@redux/store"
import { IUser } from "@services/Auth/AuthService.type"
import Wrapper from "@layouts/Wrapper"
import Meta from "@components/SEO/Meta"
import SignupComponent from "@components/screens/Signup"

interface ISignupPage {
	userData: IUser
}

const SignupPage: NextPage<ISignupPage> = ({ userData }) => {
	return (
		<>
			<Meta title='Регистрация' description='Signup' />
			<Wrapper userData={userData}>
				<SignupComponent />
			</Wrapper>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
	store => async ctx => {
		const token = nookies.parseCookies(ctx)?.token
		const data = jwt.decode(token) as { user: IUser }
		const userData = data?.user ? { ...data.user } : null
		store.dispatch(authActions.setUser(userData))
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

export default SignupPage
