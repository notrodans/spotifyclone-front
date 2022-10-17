import { FC } from 'react'

import LoginInput from '../LoginInput/LoginInput'

import styles from './LoginForm.module.scss'

const LoginForm: FC = () => {
	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<div className={styles.body}>
					<span className={styles.title}>Авторизация</span>
					<div className={styles.form}>
						<LoginInput type={'text'} placeholder={'name'} />
						<LoginInput type={'password'} placeholder={'password'} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default LoginForm
