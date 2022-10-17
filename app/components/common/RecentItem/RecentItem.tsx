import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC, LinkHTMLAttributes } from 'react'

import styles from './RecentItem.module.scss'

interface IRecentItem extends LinkHTMLAttributes<HTMLElement> {
	title: string
	src: string
	link: string
}

const RecentItem: FC<IRecentItem> = ({ title, src, link, className, ...props }) => {
	return (
		<Link href={link}>
			<a href='#' className={cn(className, styles.root)} {...props}>
				<div className={styles.body}>
					<Image src={src} width={80} height={80} alt={title} />
					<span className={styles.title}>{title}</span>
				</div>
			</a>
		</Link>
	)
}

export default RecentItem
