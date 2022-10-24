import { FC } from "react"
import { useForm } from "react-hook-form"

import LoginInput from "../LoginInput/LoginInput"

import styles from "./LoginForm.module.scss"

const LoginForm: FC = () => {
	const { register } = useForm()
	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<div className={styles.body}>
					<span className={styles.title}>Авторизация</span>
					<div className={styles.form}>
						<div className={styles.formBody}>
							<LoginInput type={"text"} placeholder={"name"} />
							<LoginInput type={"password"} placeholder={"password"} />
						</div>
						<button
							onSubmit={e => e.preventDefault()}
							className={styles.button}
							type={"submit"}>
							Авторизоваться
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LoginForm
