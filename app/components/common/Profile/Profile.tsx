import { useAuth } from "@hooks/useAuth"
import { useClickOutside } from "@hooks/useClickOutside"
import { useAppDispatch } from "@redux/hooks"
import { logoutUser } from "@redux/slices/auth/auth.slice"
import { FC } from "react"
import styles from "./Profile.module.scss"
import cn from "classnames"

const Profile: FC = () => {
	const { user } = useAuth()
	const dispatch = useAppDispatch()
	const { isShow, setIsShow, ref } = useClickOutside()

	const onLogout = () => {
		dispatch(logoutUser())
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
					<li className={styles.item}>
						<button className={styles.link}>Профиль</button>
					</li>
					<li className={styles.item}>
						<button onClick={onLogout} className={styles.link}>
							Выйти
						</button>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Profile
