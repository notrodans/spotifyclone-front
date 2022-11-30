import { DetailedHTMLProps, forwardRef, InputHTMLAttributes, memo, PropsWithChildren } from "react"

import cn from "classnames"
import styles from "./index.module.scss"

interface IFileUploadButton
	extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
		PropsWithChildren {
	htmlFor: string
}

const FileUploadButton = forwardRef<HTMLInputElement, IFileUploadButton>(
	({ children, className, htmlFor, ...props }, ref) => (
		<div className={styles.root}>
			<label className={cn(styles.label, className)} htmlFor={htmlFor}>
				{children}
			</label>
			<input ref={ref} {...props} className={styles.input} type={"file"} hidden />
		</div>
	)
)

export default memo(FileUploadButton)
