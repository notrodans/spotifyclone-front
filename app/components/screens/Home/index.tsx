import styles from "./index.module.scss";
import logo from "@assets/logo.jpeg";
import RecentItem from "@components/common/RecentItem";
import Link from "next/link";
import { FC } from "react";

const HomeComponent: FC = () => {
	return (
		<div className={styles.root}>
			<div className={styles.containerWithoutMaxWidth}>
				<Link href={"artist/63c436f9487b11bf3828c3a6"}>
					<a>artist</a>
				</Link>
				<div className={styles.body}>
					<RecentItem title={"GA$$"} src={logo} link={"/"} />
				</div>
			</div>
		</div>
	);
};

export default HomeComponent;
