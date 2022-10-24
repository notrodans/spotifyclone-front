import { FC } from "react"

import RecentItem from "../RecentItem/RecentItem"

import styles from "./Main.module.scss"
import logo from "@assets/logo.jpeg"

const Main: FC = () => {
	return (
		<div className={styles.root}>
			<div className={styles.containerWithoutMaxWidth}>
				<div className={styles.body}>
					<RecentItem title={"GA$$"} src={logo} link={"/"} />
					<RecentItem title={"GA$$"} src={logo} link={"/"} />
					<RecentItem title={"GA$$"} src={logo} link={"/"} />
					<RecentItem title={"GA$$"} src={logo} link={"/"} />
				</div>
			</div>
		</div>
	)
}

export default Main
