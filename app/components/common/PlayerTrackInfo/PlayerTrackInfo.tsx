import Image, { StaticImageData } from 'next/image'
import { FC, HTMLAttributes } from 'react'

import styles from './PlayerTrackInfo.module.scss'

interface IPlayerTrackInfo extends HTMLAttributes<HTMLDivElement> {
	src: string | StaticImageData
}

const PlayerTrackInfo: FC<IPlayerTrackInfo> = ({ src }) => {
	return (
		<div className={styles.root}>
			<Image className={styles.image} src={src} width={56} height={56} alt={'hehe'} />
		</div>
	)
}

export default PlayerTrackInfo
