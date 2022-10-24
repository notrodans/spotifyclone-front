import { FC } from "react"

import PlayerTrackInfo from "../PlayerTrackInfo/PlayerTrackInfo"

import styles from "./Footer.module.scss"
import logo from "@assets/logo.jpeg"

const Footer: FC = () => {
	return (
		<footer className={styles.root}>
			<div className={styles.containerWithoutMaxWidth}>
				<div className={styles.body}>
					<PlayerTrackInfo
						src={logo}
						title={"GA$$"}
						author={"16th"}
						titleLink={"/"}
						authorLink={"/"}
					/>
				</div>
			</div>
		</footer>
	)
}

export default Footer
