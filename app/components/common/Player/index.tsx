import { DetailedHTMLProps, FC, HTMLAttributes, useCallback, useRef } from "react"

import styles from "./index.module.scss"
import cn from "classnames"
import { useAppSelector } from "@redux/hooks"
import { selectAudio } from "@redux/slices/audio/audio.slice"
import { convertTime } from "@util/convertTime"
import { useActions } from "@hooks/useActions"
import {
	PlayerIconArrowLeft,
	PlayerIconArrowRight,
	PlayerIconPause,
	PlayerIconResume
} from "@assets/icons-components"

interface IPlayer extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Player: FC<IPlayer> = ({ className, ...props }) => {
	const { setStatus } = useActions()
	const durationRange = useRef<HTMLInputElement>(null)
	const { pause, duration, currentDuration, progress, track } = useAppSelector(selectAudio)
	const onClickPause = useCallback(() => setStatus(true), [setStatus])
	const onClickResume = useCallback(() => setStatus(false), [setStatus])

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
	)
}

export default Player
