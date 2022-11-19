import Link from "next/link"
import { FC, useEffect, useState } from "react"
import AddButton from "../AddButton/AddButton"
import FileUploadButton from "../FileUploadButton/FileUploadButton"
import HeaderAuthLinks from "../HeaderAuthLinks/HeaderAuthLinks"
import Popup from "../Popup/Popup"
import Profile from "../Profile/Profile"
import TrackFormUpload from "../TrackFormUpload/TrackFormUpload"
import TrackInputUpload from "../TrackInputUpload/TrackInputUpload"

import styles from "./Header.module.scss"
import { IUser } from "@services/Auth/AuthService.type"
import { useAppSelector } from "@redux/hooks"
import { selectAuth } from "@redux/slices/auth/auth.slice"

interface IHeader {
	userData?: IUser
}

const Header: FC<IHeader> = ({ userData }) => {
	const [popupIsOpen, setPopupIsOpen] = useState(false)
	const { user: userRedux } = useAppSelector(selectAuth)
	const [user, setUserState] = useState<IUser>(userData)
	useEffect(() => {
		setUserState(userData)
	}, [userRedux, userData])

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
								<Profile userData={userData} />
							</>
						)}
					</>
				</div>
			</div>
			<Popup isOpen={popupIsOpen}>
				<TrackFormUpload onSubmitForm={() => console.log("hehhe")} onClosePopup={onClosePopup}>
					<TrackInputUpload placeholder='Trackname' type={"text"} />
					<FileUploadButton accept={"image/*"} id={"UploadImage"} htmlFor='UploadImage'>
						Upload Image
					</FileUploadButton>
					<FileUploadButton accept={"audio/*"} id={"UploadTrack"} htmlFor='UploadTrack'>
						Upload Track
					</FileUploadButton>
				</TrackFormUpload>
			</Popup>
		</header>
	)
}

export default Header
