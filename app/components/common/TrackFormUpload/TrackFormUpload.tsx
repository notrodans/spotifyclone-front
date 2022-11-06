import React, { DetailedHTMLProps, FC, FormHTMLAttributes, PropsWithChildren } from "react"

import styles from "./TrackFormUpload.module.scss"
import cn from "classnames"

interface ITrackFormUpload
	extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,
		PropsWithChildren {
	onSubmitForm: () => void
	onClosePopup: () => void
}

const TrackFormUpload: FC<ITrackFormUpload> = ({
	className,
	onSubmitForm,
	onClosePopup,
	children,
	...props
}) => {
	return (
		<form action='' className={cn(styles.root, className)} {...props}>
			<div className={styles.body}>{children}</div>
			<div className={styles.actions}>
				<button onClick={onSubmitForm} type={"submit"} className={styles.button}>
					Upload
				</button>
				<button onClick={onClosePopup} type={"button"} className={styles.button}>
					Close
				</button>
			</div>
		</form>
	)
}

export default TrackFormUpload
