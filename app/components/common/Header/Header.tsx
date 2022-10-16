import React from 'react'

import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.root}>
			<div className={styles.container}>
				<div className={styles.title}>Header</div>
			</div>
		</header>
	)
}

export default Header
