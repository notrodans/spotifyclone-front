import { FC, useCallback, useEffect, useRef, useState } from "react"
import styles from "./index.module.scss"
import logo from "@assets/logo.jpeg"
import Image from "next/image"
import { useColor } from "@hooks/useColor"
import FileUploadButton from "@components/common/FileUploadButton"

const UploadComponent: FC = () => {
	const { colorOfImage } = useColor("")
	const [file, setFile] = useState<FileList>(null)
	const album = useRef<HTMLDivElement>(null)
	const input = useRef<HTMLInputElement>(null)

	const onUploadFile = useCallback(() => setFile(input.current.files), [])

	useEffect(() => {
		const albumEl = album?.current
		albumEl.style.setProperty("--color", colorOfImage ?? "#fff")

		return () => {
			albumEl.style.removeProperty("--color")
		}
	}, [colorOfImage])

	useEffect(() => {
		console.log(file?.item(0))
	}, [file])

	return (
		<div ref={album} className={styles.root}>
			<div className={styles.body}>
				<div className={styles.left} style={{ color: colorOfImage }}>
					<form action='' method={"post"}>
						<FileUploadButton
							ref={input}
							onChange={onUploadFile}
							htmlFor='fds'
							id='fds'
							accept={"image/*"}>
							fdsf
						</FileUploadButton>
					</form>
				</div>
				<div className={styles.right}>
					<div className={styles.rightBody}>
						<div className={styles.image}>
							<Image src={logo} width={250} height={250} alt={"logo"} />
						</div>
						<div className={styles.title}>Fantasy Winter</div>
						<ol className={styles.trackList}>
							<li className={styles.trackItem}>track</li>
							<li className={styles.trackItem}>track</li>
							<li className={styles.trackItem}>track</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UploadComponent
