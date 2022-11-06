import { useAuth } from "@hooks/useAuth"
import Link from "next/link"
import { useRef, useState } from "react"
import AddButton from "../AddButton/AddButton"
import FileUploadButton from "../FileUploadButton/FileUploadButton"
import HeaderAuthLinks from "../HeaderAuthLinks/HeaderAuthLinks"
import Popup from "../Popup/Popup"
import Profile from "../Profile/Profile"
import TrackFormUpload from "../TrackFormUpload/TrackFormUpload"
import TrackInputUpload from "../TrackInputUpload/TrackInputUpload"

import styles from "./Header.module.scss"

const Header = () => {
	const { user } = useAuth()
	const popup = useRef(null)

	const [popupIsOpen, setPopupIsOpen] = useState(false)

	const onClosePopup = () => setPopupIsOpen(false)
	const onOpenPopup = () => setPopupIsOpen(true)

	return (
		<header className={styles.root}>
			<div className={styles.containerWithoutMaxWidth}>
				<div className={styles.logo}>
					<Link href={"/"}>
						<a className={styles.logoTitle} href='#'>
							SpotifyClone
						</a>
					</Link>
				</div>
				<div className={styles.body}>
					<>
						{!user && <HeaderAuthLinks />}
						{user && (
							<>
								<AddButton onClick={onOpenPopup} />
								<Profile />
							</>
						)}
					</>
				</div>
			</div>
			<Popup ref={popup} isOpen={popupIsOpen}>
				<TrackFormUpload onSubmitForm={() => console.log("hehhe")} onClosePopup={onClosePopup}>
					<TrackInputUpload placeholder='Trackname' type={"text"} />
					<FileUploadButton id={"UploadImage"} htmlFor='UploadImage'>
						Upload Image
					</FileUploadButton>
					<FileUploadButton id={"UploadTrack"} htmlFor='UploadTrack'>
						Upload Track
					</FileUploadButton>
				</TrackFormUpload>
			</Popup>
		</header>
	)
}

export default Header
