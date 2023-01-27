import styles from "./index.module.scss";
import logo from "@assets/logo.jpeg";
import PlayerActions from "@components/PlayerActions";
import PlayerTrackInfo from "@components/PlayerTrackInfo";
import dynamic from "next/dynamic";
import { FC } from "react";

const Player = dynamic(() => import("@components/Player"), {
	ssr: false
});

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
	);
};

export default Footer;
