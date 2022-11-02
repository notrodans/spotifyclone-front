import styles from "./LoginInput.module.scss"
import cn from "classnames"
import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from "react"

const LoginInput = forwardRef<
	HTMLInputElement,
	DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
>(({ className, ...props }, ref) => (
	<input ref={ref} className={cn(styles.root, className)} {...props} />
))

export default LoginInput
