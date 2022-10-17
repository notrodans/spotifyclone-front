import { FC } from 'react'

import styles from './Main.module.scss'

const Main: FC = () => {
	return (
		<div className={styles.root}>
			<div className={styles.containerWithoutMaxWidth}>
				<div className={styles.body}>Main</div>
			</div>
		</div>
	)
}

export default Main
