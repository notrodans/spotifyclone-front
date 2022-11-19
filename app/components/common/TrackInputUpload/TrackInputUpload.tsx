import React, { DetailedHTMLProps, FC, InputHTMLAttributes } from "react"

import styles from "./TrackInputUpload.module.scss"

import cn from "classnames"

type ITrackInputUpload = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const TrackInputUpload: FC<ITrackInputUpload> = ({ className, ...props }) => {
	return <input className={cn(styles.root, className)} {...props} />
}

export default TrackInputUpload
