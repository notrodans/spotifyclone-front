import { FC } from 'react'

import RecentItem from '../RecentItem/RecentItem'

import styles from './Main.module.scss'

const Main: FC = () => {
	return (
		<div className={styles.root}>
			<div className={styles.containerWithoutMaxWidth}>
				<div className={styles.body}>
					<RecentItem title={'hey'} src={''} link={'/'} />
				</div>
			</div>
		</div>
	)
}

export default Main
