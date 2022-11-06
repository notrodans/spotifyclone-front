import AddIcon from "@assets/icons-components/AddIcon"
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react"

import styles from "./AddButton.module.scss"
import cn from "classnames"

interface IAddButton
	extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

const AddButton: FC<IAddButton> = ({ className, ...props }) => {
	return (
		<button {...props} className={cn(styles.root, className)}>
			<AddIcon />
		</button>
	)
}

export default AddButton
