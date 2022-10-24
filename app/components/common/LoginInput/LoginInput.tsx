import styles from "./LoginInput.module.scss"
import cn from "classnames"
import { FC, HTMLAttributes, HTMLInputTypeAttribute } from "react"

interface ILoginInput extends HTMLAttributes<HTMLInputElement> {
	type: HTMLInputTypeAttribute
}

const LoginInput: FC<ILoginInput> = ({ type, className, ...props }) => {
	return <input type={type} className={cn(styles.root, className)} {...props} />
}

export default LoginInput
