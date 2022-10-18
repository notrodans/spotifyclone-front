import cn from 'classnames'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { FC, LinkHTMLAttributes } from 'react'

import styles from './RecentItem.module.scss'

interface IRecentItem extends LinkHTMLAttributes<HTMLElement> {
	title: string
	src: string | StaticImageData
	link: string
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
				<button onClick={() => console.log('click')} className={styles.button} type={'button'} />
			</a>
		</Link>
	)
}

export default RecentItem
