import cn from "classnames"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { DetailedHTMLProps, FC, HTMLAttributes } from "react"

import styles from "./PlayerTrackInfo.module.scss"

interface IPlayerTrackInfo
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	src: string | StaticImageData
	title: string
	author: string
	titleLink: string
	authorLink: string
}

const PlayerTrackInfo: FC<IPlayerTrackInfo> = ({
	src,
	title,
	author,
	titleLink,
	authorLink,
	...props
}) => {
	return (
		<div className={styles.root} {...props}>
			<Link href={authorLink}>
				<a>
					<Image
						className={styles.image}
						src={src}
						width={56}
						height={56}
						alt={"hehe"}
					/>
				</a>
			</Link>
			<div className={styles.body}>
				<Link href={titleLink}>
					<a className={cn(styles.title, styles.link)} href='#'>
						{title}
					</a>
				</Link>
				<Link href={authorLink}>
					<a className={cn(styles.author, styles.link)} href='#'>
						{author}
					</a>
				</Link>
			</div>
		</div>
	)
}

export default PlayerTrackInfo
