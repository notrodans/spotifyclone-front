import { FC } from "react"

import Player from "@common/Player"
import PlayerTrackInfo from "@common/PlayerTrackInfo"
import PlayerActions from "@common/PlayerActions"

import styles from "./index.module.scss"
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
						className={styles.playerTrackInfo}
					/>
					<Player className={styles.player} />
					<PlayerActions className={styles.playerActions} />
				</div>
			</div>
		</footer>
	)
}

export default Footer