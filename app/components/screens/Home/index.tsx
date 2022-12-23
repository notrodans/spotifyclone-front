import { FC } from "react"

import styles from "./index.module.scss"
import logo from "@assets/logo.jpeg"
import RecentItem from "@components/common/RecentItem"
import { useAppSelector } from "@redux/hooks"
import { useRouter } from "next/router"
import { selectAuth } from "@redux/slices/auth/auth.slice"

const HomeComponent: FC = () => {
	const { user } = useAppSelector(selectAuth)
	const router = useRouter()
	if (!user) {
		router.push("/login")
	}
	return (
		<div className={styles.root}>
			<div className={styles.containerWithoutMaxWidth}>
				<div className={styles.body}>
					<RecentItem title={"GA$$"} src={logo} link={"/"} />
				</div>
			</div>
		</div>
	)
}

export default HomeComponent
