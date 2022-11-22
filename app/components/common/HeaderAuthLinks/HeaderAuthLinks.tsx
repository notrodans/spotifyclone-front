import Link from "next/link"
import { useRouter } from "next/router"
import { FC } from "react"
import styles from "./HeaderAuthLinks.module.scss"

const HeaderAuthLinks: FC = () => {
	const { pathname } = useRouter()
	return (
		<>
			{pathname === "/login" ? (
				<Link href={"login"}>
					<a className={styles.link} href='#'>
						Sign in
					</a>
				</Link>
			) : (
				<Link href={"/signup"}>
					<a className={styles.link} href='#'>
						Sign up
					</a>
				</Link>
			)}
		</>
	)
}

export default HeaderAuthLinks
