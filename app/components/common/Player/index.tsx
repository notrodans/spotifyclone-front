import styles from "./index.module.scss";
import {
	PlayerIconArrowLeft,
	PlayerIconArrowRight,
	PlayerIconPause,
	PlayerIconResume
} from "@assets/icons-components";
import { useActions } from "@hooks/useActions";
import { useAppSelector } from "@redux/hooks";
import { selectAudio } from "@redux/slices/audio/audio.slice";
import { selectAlbum } from "@redux/slices/uploadAlbum/uploadAlbum.slice";
import { convertTime } from "@util/convertTime";
import cn from "classnames";
import { DetailedHTMLProps, FC, HTMLAttributes, useEffect, useRef, useState } from "react";

interface IPlayer extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Player: FC<IPlayer> = ({ className, ...props }) => {
	const { setStatus, setAudio, setDuration, setCurrentDuration, setProgress } = useActions();
	const { track, pause, volume, duration, currentDuration, progress } = useAppSelector(selectAudio);
	const { tracks } = useAppSelector(selectAlbum);
	const [audioEl, setAudioEl] = useState<HTMLAudioElement>(null);
	const durationRange = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (!audioEl) {
			setAudioEl(new Audio());
			setAudio(tracks[0]);
		}
	}, [tracks, audioEl, setAudio]);

	useEffect(() => {
		if (audioEl) {
			audioEl.onloadedmetadata = () => {
				setDuration(audioEl.duration);
			};
		}
	}, [audioEl, setDuration]);

	useEffect(() => {
		if (audioEl && audioEl?.src) {
			audioEl.volume = volume;
			audioEl.ontimeupdate = () => {
				setCurrentDuration(audioEl?.currentTime);
				setProgress();
			};

			if (pause) {
				audioEl.pause();
			} else {
				audioEl.play();
			}
		} else {
			if (audioEl && track) {
				audioEl.src = track.link;
				console.log(audioEl, track.link);
			}
		}
	}, [tracks, audioEl, pause, volume, track, setCurrentDuration, setProgress]);

	const onClickPause = () => {
		setStatus(true);
	};
	const onClickResume = () => {
		setStatus(false);
	};

	return (
		<div className={cn(styles.root, className)} {...props}>
			<div className={styles.actions}>
				<button className={styles.button} disabled={!track ? true : false}>
					<PlayerIconArrowLeft />
				</button>
				<button
					onClick={() => setStatus(!pause)}
					disabled={!track ? true : false}
					className={cn(styles.button, styles.buttonFill)}>
					{pause ? (
						<PlayerIconPause onClick={onClickPause} />
					) : (
						<PlayerIconResume onClick={onClickResume} />
					)}
				</button>
				<button className={styles.button} disabled={!track ? true : false}>
					<PlayerIconArrowRight />
				</button>
			</div>
			<div className={styles.body}>
				<span className={cn(styles.currentStart, styles.timestamps)}>
					{convertTime(currentDuration) || "0:00"}
				</span>
				<div className={styles.range}>
					<input ref={durationRange} className={styles.controls} type={"range"} min={0} max={100} />
					<span style={{ width: progress + "%" }} className={styles.rangeLine} />
					<span style={{ left: progress + "%" }} className={styles.rangeDot} />
				</div>
				<span className={cn(styles.currentEnd, styles.timestamps)}>{convertTime(duration)}</span>
			</div>
		</div>
	);
};

export default Player;
