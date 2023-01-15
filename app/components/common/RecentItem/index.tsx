import styles from "./index.module.scss";
import { PlayerIconPause } from "@assets/icons-components";
import cn from "classnames";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC, LinkHTMLAttributes } from "react";

interface IRecentItem extends LinkHTMLAttributes<HTMLElement> {
	title: string;
	src: string | StaticImageData;
	link: string;
}

const RecentItem: FC<IRecentItem> = ({ title, src, link, className, ...props }) => {
	return (
		<Link href={link}>
			<a href='#' className={cn(className, styles.root)} {...props}>
				<div className={styles.body}>
					<div className={styles.image}>
						<Image src={src} width={80} height={80} alt={title} />
					</div>
					<span className={styles.title}>{title}</span>
				</div>
				<button className={styles.button} type={"button"}>
					<PlayerIconPause />
				</button>
			</a>
		</Link>
	);
};

export default RecentItem;
