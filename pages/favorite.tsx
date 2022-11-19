import React from "react"
import type { GetServerSideProps, NextPage } from "next"
import * as nookies from "nookies"
import * as jwt from "jsonwebtoken"
import Favorite from "@components/screens/favorite/Favorite"
import { wrapper } from "@redux/store"
import { setUser } from "@redux/slices/auth/auth.slice"
import { IUser } from "@services/Auth/AuthService.type"

interface IFavoritePage {
	userData: IUser
}

const FavoritePage: NextPage<IFavoritePage> = ({ userData }) => {
	return <Favorite userData={userData} />
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
	store => async ctx => {
		const token = nookies.parseCookies(ctx)?.token
		const data = jwt.decode(token) as { user: IUser }
		const userData = data?.user ? { ...data?.user } : null
		store.dispatch(setUser(userData))
		return {
			props: {
				userData
			}
		}
	}
)

export default FavoritePage
