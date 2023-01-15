import styles from "./index.module.scss";
import cn from "classnames";
import { DetailedHTMLProps, forwardRef, InputHTMLAttributes, PropsWithChildren } from "react";

interface IFileUploadButton
	extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
		PropsWithChildren {
	htmlFor: string;
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
);

export default FileUploadButton;
