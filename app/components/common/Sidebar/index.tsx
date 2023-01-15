import styles from "./index.module.scss";
import {
	FavoriteIcon,
	FavoriteIconActive,
	HomeIcon,
	HomeIconActive
} from "@assets/icons-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

const Links = [
	{
		id: 1,
		name: "Home",
		path: "/",
		icon: <HomeIcon className={styles.icon} />,
		iconActive: <HomeIconActive className={styles.icon} />
	},
	{
		id: 2,
		name: "Favorite",
		path: "/favorite",
		icon: <FavoriteIcon className={styles.icon} />,
		iconActive: <FavoriteIconActive className={styles.icon} />
	}
];

const Sidebar: FC = () => {
	const { pathname } = useRouter();
	return (
		<div className={styles.root}>
			<div className={styles.containerWithoutMaxWidth}>
				<div className={styles.body}>
					{Links.map(({ id, path, icon, iconActive }) => (
						<Link key={id} href={path}>
							<a className={styles.link} href='#'>
								{pathname === path ? iconActive : icon}
							</a>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
