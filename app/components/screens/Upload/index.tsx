import { FC, useEffect, useRef } from "react"
import styles from "./index.module.scss"
import logo from "@assets/logo.jpeg"
import Image from "next/image"
import { useColor } from "@hooks/useColor"

const UploadComponent: FC = () => {
	const [colorOfImage] = useColor("")
	const album = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const albumEl = album?.current
		albumEl.style.setProperty("--color", colorOfImage ?? "#fff")

		return () => {
			albumEl.style.removeProperty("--color")
		}
	}, [colorOfImage])

	return (
		<div ref={album} className={styles.root}>
			<div className={styles.body}>
				<div className={styles.left} style={{ color: colorOfImage }}>
					Загрузка тречелы
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
