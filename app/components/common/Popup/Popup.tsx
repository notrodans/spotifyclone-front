import { FC, LegacyRef, PropsWithChildren } from "react"
import ReactModal from "react-modal"
import styles from "./Popup.module.scss"

interface IPopup extends PropsWithChildren, ReactModal.Props {
	ref?: LegacyRef<ReactModal>
}

const Popup: FC<IPopup> = ({
	onAfterClose,
	onRequestClose,
	parentSelector,
	isOpen,
	ref,
	children,
	...props
}) => {
	return (
		<ReactModal
			ref={ref}
			onAfterClose={onAfterClose}
			onRequestClose={onRequestClose}
			isOpen={isOpen}
			className={styles.root}
			overlayClassName={styles.overlay}
			{...props}>
			{children}
		</ReactModal>
	)
}

export default Popup
