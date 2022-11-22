import type { GetServerSideProps, NextPage } from "next"
import * as nookies from "nookies"
import * as jwt from "jsonwebtoken"
import { wrapper } from "@redux/store"
import { setUser } from "@redux/slices/auth/auth.slice"

import Meta from "@components/SEO/Meta"
import Wrapper from "@layouts/Wrapper"
import { IUser } from "@services/Auth/AuthService.type"
import FavoriteComponent from "@components/screens/Favorite"

interface IFavorite {
	userData: IUser
}

const Favorite: NextPage<IFavorite> = ({ userData }) => {
	return (
		<>
			<Meta title={"Избранные"} description={"FavoritePage"} />
			<Wrapper userData={userData}>
				<FavoriteComponent />
			</Wrapper>
		</>
	)
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

export default Favorite
