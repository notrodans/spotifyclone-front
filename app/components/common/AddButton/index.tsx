import AddIcon from "@assets/icons-components/AddIcon"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AnchorHTMLAttributes, DetailedHTMLProps, FC } from "react"

import styles from "./index.module.scss"
import cn from "classnames"

type IAddButton = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

const AddButton: FC<IAddButton> = ({ className, ...props }) => {
	return (
		<a href='' {...props} className={cn(styles.root, className)}>
			<AddIcon />
		</a>
	)
}

export default AddButton
