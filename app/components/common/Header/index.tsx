import AddButton from "../AddButton";
import HeaderAuthLinks from "../HeaderAuthLinks";
import Profile from "../Profile";
import styles from "./index.module.scss";
import { useAppSelector } from "@redux/hooks";
import { selectAuth } from "@redux/slices/auth/auth.slice";
import Link from "next/link";
import { FC } from "react";

const Header: FC = () => {
	const { user } = useAppSelector(selectAuth);

	return (
		<header className={styles.root}>
			<div className={styles.containerWithoutMaxWidth}>
				<div className={styles.logo}>
					<Link href={"/"}>
						<a className={styles.logoTitle} href='#'>
							SpotifyClone
						</a>
					</Link>
				</div>
				<div className={styles.body}>
					<>
						{user ? (
							<>
								<Link href='/upload'>
									<AddButton />
								</Link>
								<Profile />
							</>
						) : (
							<HeaderAuthLinks />
						)}
					</>
				</div>
			</div>
		</header>
	);
};

export default Header;
