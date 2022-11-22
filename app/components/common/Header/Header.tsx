import Link from "next/link"
import { FC, useEffect, useState } from "react"
import AddButton from "../AddButton/AddButton"
import HeaderAuthLinks from "../HeaderAuthLinks/HeaderAuthLinks"
import Profile from "../Profile/Profile"

import styles from "./Header.module.scss"
import { IUser } from "@services/Auth/AuthService.type"
import { useAppSelector } from "@redux/hooks"
import { selectAuth } from "@redux/slices/auth/auth.slice"

interface IHeader {
	userData: IUser
}

const Header: FC<IHeader> = ({ userData }) => {
	const { user: userRedux } = useAppSelector(selectAuth)
	const [user, setUserState] = useState<IUser>(userData)
	useEffect(() => {
		setUserState(userData)
	}, [userRedux, userData])

	return (
		<header className={styles.root}>
			<div className={styles.containerWithoutMaxWidth}>
				<div className={styles.logo}>
					<Link href={"/"}>
						<a className={styles.logoTitle} href='#'>
							SpotifyClone
						</a>
					</Link>
				</div>
				<div className={styles.body}>
					<>
						{!user && <HeaderAuthLinks />}
						{user && (
							<>
								<Link href='/upload'>
									<AddButton />
								</Link>
								<Profile userData={userData} />
							</>
						)}
					</>
				</div>
			</div>
		</header>
	)
}

export default Header
