import { FC, HTMLAttributes, useCallback, useEffect, useState } from "react"

import styles from "./LoginForm.module.scss"
import cn from "classnames"
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form"
import LoginInput from "../LoginInput/LoginInput"
import { useRouter } from "next/router"
import { validateEmailPattern } from "@util/regxpMail"
import { useAppSelector } from "@redux/hooks"
import { selectAuth } from "@redux/slices/auth/auth.slice"
import { useActions } from "@hooks/useActions"
import * as nookies from "nookies"

interface IFormValues {
	login: string
	email: string
	password: string
}

type LoginFormType = HTMLAttributes<HTMLDivElement>

const LoginForm: FC<LoginFormType> = ({ className, ...props }) => {
	const { pathname, ...router } = useRouter()
	const [token, setToken] = useState("")
	const [type, setType] = useState("")
	const { isLoading } = useAppSelector(selectAuth)
	const { postLogin, postRegister } = useActions()
	const {
		register,
		handleSubmit
		// formState: { errors }
	} = useForm<IFormValues>({ mode: "onChange" })
	const [{ login, email, password }, setValues] = useState<IFormValues>({
		login: "",
		email: "",
		password: ""
	})

	useEffect(() => {
		if (typeof window !== "undefined") {
			setToken(nookies.parseCookies()?.token)
		}
	}, [])

	useEffect(() => {
		if (pathname === "/login") {
			setType("login")
		} else if (pathname === "/signup") {
			setType("signup")
		}
	}, [pathname])

	const onSubmitForm: SubmitHandler<IFormValues> = useCallback(
		async data => {
			if (type === "login") {
				try {
					const loginParams = {
						login: data.email,
						password: data.password
					}
					postLogin(loginParams)
					if (!isLoading) {
						setTimeout(() => router.push("/"), 500)
					}
				} catch (e) {
					console.log(e)
				}
			} else if (type === "signup") {
				try {
					const registerParams = {
						login: data.login,
						email: data.email,
						password: data.password
					}
					postRegister(registerParams)
					setTimeout(() => router.push("/login"), 1000)
				} catch (e) {
					console.warn(e)
				}
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[type, isLoading]
	)

	const onErrorForm: SubmitErrorHandler<IFormValues> = errors => {
		console.log(errors)
	}

	return token ? (
		<h1>Вы уже авторизированны</h1>
	) : (
		<div className={cn(styles.root, className)} {...props}>
			<div className={styles.container}>
				<div className={styles.body}>
					<span className={styles.title}>{type === "login" ? "Авторизация" : "Регистрация"}</span>
					<form onSubmit={handleSubmit(onSubmitForm, onErrorForm)} className={styles.formBody}>
						<LoginInput
							{...register(type === "login" ? "email" : "login", {
								required: true,
								[type === "login" ? "pattern" : ""]: validateEmailPattern
							})}
							type={type === "login" ? "email" : "text"}
							onChange={e =>
								setValues(prev => ({
									...prev,
									[type === "login" ? "email" : "login"]: e.target.value
								}))
							}
							value={type === "login" ? email : login}
							placeholder={type === "login" ? "email" : "login"}
							required
						/>
						{type === "signup" ? (
							<LoginInput
								{...register("email", {
									required: true,
									pattern: validateEmailPattern
								})}
								type={"email"}
								onChange={e => setValues(prev => ({ ...prev, email: e.target.value }))}
								value={email}
								placeholder={"email"}
								required
							/>
						) : null}
						<LoginInput
							{...register("password", { required: true })}
							type={"password"}
							onChange={e => setValues(prev => ({ ...prev, password: e.target.value }))}
							value={password}
							placeholder={"password"}
							required
						/>
						<button disabled={isLoading} className={styles.button} type={"submit"}>
							{type === "signup" ? "Зарегистрироваться" : "Авторизоваться"}
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default LoginForm
