import { useAppSelector } from "@redux/hooks"
import { selectAuth } from "@redux/slices/auth/auth.slice"
import { IUser } from "@services/Auth/AuthService.type"
import { useEffect, useState } from "react"

export const useAuth = () => {
	const { user: u, accessToken: a } = useAppSelector(selectAuth)
	const [user, setUser] = useState<IUser>(null)
	const [accessToken, setAccessToken] = useState("")

	useEffect(() => {
		setUser(u)
		setAccessToken(a)
	}, [u, a])

	return { user, accessToken }
}
