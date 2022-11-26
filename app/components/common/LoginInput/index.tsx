import styles from "./index.module.scss"
import cn from "classnames"
import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from "react"

interface ILoginInput
	extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

const LoginInput = forwardRef<HTMLInputElement, ILoginInput>(({ className, ...props }, ref) => (
	<input ref={ref} className={cn(styles.root, className)} {...props} />
))

export default LoginInput
