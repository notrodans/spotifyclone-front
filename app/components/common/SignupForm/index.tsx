import LoginInput from "../LoginInput";
import styles from "./index.module.scss";
import { useActions } from "@hooks/useActions";
import { useAppSelector } from "@redux/hooks";
import { selectAuth } from "@redux/slices/auth/auth.slice";
import { validateEmailPattern } from "@util/regxpMail";
import cn from "classnames";
import { useRouter } from "next/router";
import { FC, HTMLAttributes, useState } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

interface IFormValues {
	login: string;
	email: string;
	password: string;
}

interface SignupForm extends HTMLAttributes<HTMLDivElement> {}

const SignupForm: FC<SignupForm> = ({ className, ...props }) => {
	const router = useRouter();
	const { isLoading } = useAppSelector(selectAuth);
	// const { postRegister } = useActions();
	const { register, handleSubmit } = useForm<IFormValues>({ mode: "onChange" });
	const [{ login, email, password }, setValues] = useState<IFormValues>({
		login: "",
		email: "",
		password: ""
	});

	const onSubmitForm: SubmitHandler<IFormValues> = async data => {
		try {
			const registerParams = {
				login: data.login,
				email: data.email,
				password: data.password
			};
			// await postRegister(registerParams);
			router.push("/login");
		} catch (e) {
			console.warn(e);
		}
	};

	const onErrorForm: SubmitErrorHandler<IFormValues> = errors => {
		console.log(errors);
	};

	return (
		<div className={cn(styles.root, className)} {...props}>
			<div className={styles.container}>
				<div className={styles.body}>
					<span className={styles.title}>Регистрация</span>
					<form onSubmit={handleSubmit(onSubmitForm, onErrorForm)} className={styles.formBody}>
						<LoginInput
							{...register("login", {
								required: true
							})}
							type={"text"}
							onChange={e =>
								setValues(prev => ({
									...prev,
									login: e.target.value
								}))
							}
							value={login}
							placeholder={"login"}
							required
						/>
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
						<LoginInput
							{...register("password", { required: true })}
							type={"password"}
							onChange={e => setValues(prev => ({ ...prev, password: e.target.value }))}
							value={password}
							placeholder={"password"}
							required
						/>
						<button disabled={isLoading} className={styles.button} type={"submit"}>
							Зарегистрироваться
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignupForm;
