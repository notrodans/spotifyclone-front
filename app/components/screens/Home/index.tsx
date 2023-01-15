import styles from "./index.module.scss";
import logo from "@assets/logo.jpeg";
import RecentItem from "@components/common/RecentItem";
import { useAppSelector } from "@redux/hooks";
import { selectAuth } from "@redux/slices/auth/auth.slice";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";

const HomeComponent: FC = () => {
	const { user } = useAppSelector(selectAuth);
	const router = useRouter();
	useEffect(() => {
		if (!user) {
			router.push("/login");
		}
	}, [user]);
	return (
		<div className={styles.root}>
			<div className={styles.containerWithoutMaxWidth}>
				<div className={styles.body}>
					<RecentItem title={"GA$$"} src={logo} link={"/"} />
				</div>
			</div>
		</div>
	);
};

export default HomeComponent;
