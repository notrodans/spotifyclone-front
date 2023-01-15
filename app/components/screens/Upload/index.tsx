import styles from "./index.module.scss";
import FileUploadButton from "@components/common/FileUploadButton";
import { useActions } from "@hooks/useActions";
import { useColor } from "@hooks/useColor";
import { useAppSelector } from "@redux/hooks";
import { selectAuth } from "@redux/slices/auth/auth.slice";
import { selectAlbum } from "@redux/slices/uploadAlbum/uploadAlbum.slice";
import { convertTime } from "@util/convertTime";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useCallback, useEffect, useRef, useState } from "react";

const UploadComponent: FC = () => {
	const { setTrack, setAudio } = useActions();
	const { tracks } = useAppSelector(selectAlbum);
	const { user } = useAppSelector(selectAuth);
	const [image, setImage] = useState<File>(null);
	const [imageUrl, setImageUrl] = useState<string>(null);
	const { colorOfImage } = useColor(imageUrl || "");
	const album = useRef<HTMLDivElement>(null);
	const uploadImageInput = useRef<HTMLInputElement>(null);
	const uploadTrackInput = useRef<HTMLInputElement>(null);

	const router = useRouter();
	if (!user) {
		router.push("/login");
	}

	const onUploadImage = useCallback(() => setImage(uploadImageInput.current.files.item(0)), []);
	const onUploadTrack = useCallback(() => {
		const file = uploadTrackInput.current?.files.item(0);
		if (file) {
			const fileLink = window.URL.createObjectURL(new Blob([file], { type: "audio/*" }));
			const trackObj = { name: file.name, size: file.size, type: file.type, link: fileLink };
			setTrack(trackObj);
		}
	}, [setTrack]);

	useEffect(() => {
		const albumEl = album?.current;
		albumEl.style.setProperty("--color", colorOfImage ?? "#fff");

		return () => {
			albumEl.style.removeProperty("--color");
		};
	}, [colorOfImage]);

	useEffect(() => {
		(async () => {
			if (image) {
				setImageUrl(window.URL.createObjectURL(new Blob([image], { type: "image/*" })));
			}
		})();
	}, [image]);

	return (
		<div ref={album} className={styles.root}>
			<div className={styles.body}>
				<div className={styles.left}>
					<button onClick={() => setAudio(tracks[0])}>click</button>
					<form action='' method={"post"}>
						<FileUploadButton
							ref={uploadImageInput}
							onChange={onUploadImage}
							htmlFor='image'
							id='image'
							accept={"image/*"}>
							upload-image
						</FileUploadButton>
						<FileUploadButton
							ref={uploadTrackInput}
							onChange={onUploadTrack}
							htmlFor='track'
							id='track'
							accept={"audio/*"}>
							upload-track
						</FileUploadButton>
					</form>
				</div>
				<div className={styles.right}>
					<div className={styles.rightBody}>
						<div className={styles.image}>
							<Image
								src={imageUrl || "/placeholder.png"}
								width={250}
								height={250}
								alt='placeholder'
							/>
						</div>
						<div className={styles.title}>Example title</div>
						<ol className={styles.trackList}>
							{tracks &&
								tracks.map(item => (
									<li key={item.name} className={styles.trackItem}>
										<span className={styles.trackName}>{item.name}</span>
										<span className={styles.trackTime}>{convertTime(item.size)}</span>
									</li>
								))}
						</ol>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UploadComponent;
