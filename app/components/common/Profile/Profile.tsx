import { useClickOutside } from "@hooks/useClickOutside"
import { useAppDispatch, useAppSelector } from "@redux/hooks"
import { logoutUser, selectAuth } from "@redux/slices/auth/auth.slice"
import { FC, useEffect, useState } from "react"
import styles from "./Profile.module.scss"
import cn from "classnames"
import { IUser } from "@services/Auth/AuthService.type"
import { useRouter } from "next/router"
import Link from "next/link"

interface IProfile {
	userData?: IUser
}

const profilesLinks = [
	{
		id: 1,
		text: "Профиль",
		link: "/me"
	}
]

const Profile: FC<IProfile> = ({ userData }) => {
	const [user, setUserState] = useState<IUser>(userData)
	const { user: userRedux } = useAppSelector(selectAuth)
	useEffect(() => {
		setUserState(userData)
	}, [userRedux, userData])

	const dispatch = useAppDispatch()
	const { isShow, setIsShow, ref } = useClickOutside()
	const router = useRouter()

	const onLogout = () => {
		dispatch(logoutUser())
		router.push("/login")
	}

	return (
		<div ref={ref} className={styles.root}>
			<button
				type={"button"}
				onClick={() => setIsShow(prev => !prev)}
				className={cn(styles.userName, {
					[styles.active]: isShow
				})}>
				{user && user.login}
			</button>
			<nav
				className={cn(styles.nav, {
					[styles.active]: isShow
				})}>
				<ul className={styles.body}>
					{profilesLinks.map(item => (
						<li key={item.id} className={styles.item}>
							<Link href={item.link}>
								<a className={styles.link}>Профиль</a>
							</Link>
						</li>
					))}
					<li className={styles.item}>
						<button onClick={onLogout} className={styles.link} type={"button"}>
							Выйти
						</button>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Profile
