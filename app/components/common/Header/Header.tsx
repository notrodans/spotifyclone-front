import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"

import styles from "./Header.module.scss"

const Header = () => {
	const { pathname } = useRouter()
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
					{pathname === "/login" ? (
						""
					) : (
						<Link href={"login"}>
							<a className={styles.link} href='#'>
								Log in
							</a>
						</Link>
					)}
				</div>
			</div>
		</header>
	)
}

export default Header
