import { setUser } from "@redux/slices/auth/auth.slice"
import type { GetServerSideProps, NextPage } from "next"
import * as jwt from "jsonwebtoken"
import * as nookies from "nookies"
import { wrapper } from "@redux/store"
import { IUser } from "@services/Auth/AuthService.type"
import Wrapper from "@layouts/Wrapper"

interface IMe {
	userData: IUser
}

const Me: NextPage<IMe> = ({ userData }) => {
	return (
		<Wrapper userData={userData}>
			<h1>Me</h1>
		</Wrapper>
	)
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
	store => async ctx => {
		const token = nookies.parseCookies(ctx)?.token
		const data = jwt.decode(token) as { user: IUser }
		const userData = data?.user ? { ...data?.user } : null
		store.dispatch(setUser(userData))
		if (!userData) {
			return {
				redirect: {
					destination: "/login",
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

export default Me
