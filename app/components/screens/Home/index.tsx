import { FC } from "react"

import styles from "./index.module.scss"
import logo from "@assets/logo.jpeg"
import RecentItem from "@components/common/RecentItem"

const HomeComponent: FC = () => {
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
