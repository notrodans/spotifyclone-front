import { AnchorHTMLAttributes, DetailedHTMLProps, forwardRef } from "react"

import styles from "./index.module.scss"
import cn from "classnames"
import { AddIcon } from "@assets/icons-components/AddIcon"

interface IAddButton
	extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {}

const AddButton = forwardRef<HTMLAnchorElement, IAddButton>(({ className, ...props }, ref) => {
	return (
		<a ref={ref} href='' {...props} className={cn(styles.root, className)}>
			<AddIcon />
		</a>
	)
})

export default AddButton
