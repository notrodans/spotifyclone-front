import { FC, HTMLAttributes, useCallback, useState } from "react"

import styles from "./index.module.scss"
import cn from "classnames"
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form"
import LoginInput from "../LoginInput"
import { useRouter } from "next/router"
import { validateEmailPattern } from "@util/regxpMail"
import { useAppSelector } from "@redux/hooks"
import { selectAuth } from "@redux/slices/auth/auth.slice"
import { useActions } from "@hooks/useActions"

interface IFormValues {
	email: string
	password: string
}

interface LoginForm extends HTMLAttributes<HTMLDivElement> {}

const LoginForm: FC<LoginForm> = ({ className, ...props }) => {
	const router = useRouter()
	const { isLoading } = useAppSelector(selectAuth)
	const { postLogin } = useActions()
	const { register, handleSubmit } = useForm<IFormValues>({ mode: "onChange" })
	const [{ email, password }, setValues] = useState<IFormValues>({
		email: "",
		password: ""
	})

	const onSubmitForm: SubmitHandler<IFormValues> = useCallback(
		async data => {
			try {
				const loginParams = {
					login: data.email,
					password: data.password
				}
				postLogin(loginParams)
				setTimeout(() => router.push("/"), 500)
			} catch (e) {
				console.log(e)
			}
		},
		[router]
	)

	const onErrorForm: SubmitErrorHandler<IFormValues> = errors => {
		console.log(errors)
	}

	return (
		<div className={cn(styles.root, className)} {...props}>
			<div className={styles.container}>
				<div className={styles.body}>
					<span className={styles.title}>Авторизация</span>
					<form onSubmit={handleSubmit(onSubmitForm, onErrorForm)} className={styles.formBody}>
						<LoginInput
							{...register("email", {
								required: true,
								pattern: validateEmailPattern
							})}
							type={"email"}
							onChange={e =>
								setValues(prev => ({
									...prev,
									email: e.target.value
								}))
							}
							value={email}
							placeholder={"email"}
							required
						/>
						<LoginInput
							{...register("password", { required: true })}
							type={"password"}
							onChange={e => setValues(prev => ({ ...prev, password: e.target.value }))}
							value={password}
							placeholder={"password"}
							required
						/>
						<button disabled={isLoading} className={styles.button} type={"submit"}>
							Авторизоваться
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default LoginForm
