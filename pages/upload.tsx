import { setUser } from "@redux/slices/auth/auth.slice"
import type { GetServerSideProps, NextPage } from "next"
import * as jwt from "jsonwebtoken"
import * as nookies from "nookies"
import { wrapper } from "@redux/store"
import { IUser } from "@services/Auth/AuthService.type"
import Upload from "@components/screens/upload/Upload"
import Meta from "@components/SEO/Meta"

interface IUploadPage {
	userData: IUser
}

const UploadPage: NextPage<IUploadPage> = ({ userData }) => (
	<>
		<Meta title='Загрузка треков' description='Upload Tracks' />
		<Upload userData={userData} />
	</>
)

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

export default UploadPage
