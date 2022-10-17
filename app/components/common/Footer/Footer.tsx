import { FC } from 'react'

import PlayerTrackInfo from '../PlayerTrackInfo/PlayerTrackInfo'

import styles from './Footer.module.scss'

const Footer: FC = () => {
	return (
		<footer className={styles.root}>
			<div className={styles.containerWithoutMaxWidth}>
				<div className={styles.body}>
					<PlayerTrackInfo src={''} />
				</div>
			</div>
		</footer>
	)
}

export default Footer
