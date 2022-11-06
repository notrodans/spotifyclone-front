import { DetailedHTMLProps, FC, InputHTMLAttributes, PropsWithChildren } from "react"

import cn from "classnames"
import styles from "./FileUploadButton.module.scss"

interface IFileUploadButton
	extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
		PropsWithChildren {
	htmlFor: string
}

const FileUploadButton: FC<IFileUploadButton> = ({ children, className, htmlFor, ...props }) => {
	return (
		<div className={styles.root}>
			<label className={cn(styles.label, className)} htmlFor={htmlFor}>
				{children}
			</label>
			<input className={styles.input} type={"file"} hidden {...props} />
		</div>
	)
}

export default FileUploadButton
