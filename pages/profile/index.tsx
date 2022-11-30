import { setUser } from "@redux/slices/auth/auth.slice"
import type { GetServerSideProps, NextPage } from "next"
import * as jwt from "jsonwebtoken"
import * as nookies from "nookies"
import { wrapper } from "@redux/store"
import { IUser } from "@services/Auth/AuthService.type"
import Wrapper from "@layouts/Wrapper"
import Meta from "@components/SEO/Meta"
import ProfileComponent from "@components/screens/Profile"

interface IProfile {
	userData: IUser
}

const Profile: NextPage<IProfile> = ({ userData }) => {
	return (
		<>
			<Meta title='Профиль' description='ProfilePage' />
			<Wrapper userData={userData}>
				<ProfileComponent />
			</Wrapper>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
	store => async ctx => {
		const token = nookies.parseCookies(ctx)?.token
		const data = jwt.decode(token) as { user: IUser }
		const userData = data?.user ? { ...data.user } : null
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

export default Profile
