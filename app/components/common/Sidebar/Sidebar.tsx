import Link from "next/link"
import { useRouter } from "next/router"
import { FC } from "react"

import styles from "./Sidebar.module.scss"
import FavoriteIcon from "@assets/icons-components/FavoriteIcon"
import FavoriteIconActive from "@assets/icons-components/FavoriteIconActive"
import HomeIcon from "@assets/icons-components/HomeIcon"
import HomeIconActive from "@assets/icons-components/HomeIconActive"

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
]

const Sidebar: FC = () => {
	const { pathname } = useRouter()
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
	)
}

export default Sidebar
