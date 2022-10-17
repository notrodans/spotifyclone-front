import React from 'react'

import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.root}>
			<div className={styles.containerWithoutMaxWidth}>
				<div className={styles.title}>SpotifyClone</div>
			</div>
		</header>
	)
}

export default Header
