import { FC } from "react"

import PlayerTrackInfo from "@common/PlayerTrackInfo"

import styles from "./index.module.scss"
import logo from "@assets/logo.jpeg"
import Player from "@common/Player"
import PlayerActions from "@common/PlayerActions"

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
					<Player />
					<PlayerActions />
				</div>
			</div>
		</footer>
	)
}

export default Footer
