import { useAuth } from "@hooks/useAuth"
import Link from "next/link"
import HeaderAuthLinks from "../HeaderAuthLinks/HeaderAuthLinks"
import Profile from "../Profile/Profile"

import styles from "./Header.module.scss"

const Header = () => {
	const { user } = useAuth()

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
				<div className={styles.body}>{!user && <HeaderAuthLinks />}</div>
				{user && <Profile />}
			</div>
		</header>
	)
}

export default Header
