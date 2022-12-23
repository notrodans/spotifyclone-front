import { useAppSelector } from "@redux/hooks"
import { selectAuth } from "@redux/slices/auth/auth.slice"
import { useRouter } from "next/router"
import { FC } from "react"

const ProfileComponent: FC = () => {
	const { user } = useAppSelector(selectAuth)
	const router = useRouter()
	if (!user) {
		router.push("/login")
	}
	return <div>Profile</div>
}

export default ProfileComponent
