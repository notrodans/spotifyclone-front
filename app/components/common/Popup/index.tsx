import { FC, PropsWithChildren } from "react"
import ReactModal from "react-modal"
import styles from "./index.module.scss"

interface IPopup extends PropsWithChildren, ReactModal.Props {}

const Popup: FC<IPopup> = ({
	onAfterClose,
	onRequestClose,
	parentSelector,
	isOpen,
	children,
	...props
}) => {
	return (
		<ReactModal
			onAfterClose={onAfterClose}
			onRequestClose={onRequestClose}
			parentSelector={parentSelector}
			isOpen={isOpen}
			className={styles.root}
			overlayClassName={styles.overlay}
			{...props}>
			{children}
		</ReactModal>
	)
}

export default Popup
