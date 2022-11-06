import Link from "next/link"
import { useRouter } from "next/router"
import { FC } from "react"
import styles from "./HeaderAuthLinks.module.scss"

const HeaderAuthLinks: FC = () => {
	const { pathname } = useRouter()
	return (
		<>
			{pathname === "/login" ? null : (
				<Link className={styles.link} href={"login"}>
					Sign in
				</Link>
			)}
			{pathname === "/signup" ? null : (
				<Link className={styles.link} href={"/signup"}>
					Sign up
				</Link>
			)}
		</>
	)
}

export default HeaderAuthLinks
