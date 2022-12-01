import { DetailedHTMLProps, FC, HTMLAttributes, useCallback, useRef } from "react"

import styles from "./index.module.scss"
import cn from "classnames"
import PlayerIconArrowLeft from "@assets/icons-components/PlayerIconArrowLeft"
import PlayerIconPause from "@assets/icons-components/PlayerIconPause"
import PlayerIconArrowRight from "@assets/icons-components/PlayerIconArrowRight"
import PlayerIconResume from "@assets/icons-components/PlayerIconResume"
import { useAppDispatch, useAppSelector } from "@redux/hooks"
import { selectAudio, setStatus } from "@redux/slices/audio/audio.slice"
import { convertTime } from "@util/convertTime"

interface IPlayer extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

const Player: FC<IPlayer> = ({ className, ...props }) => {
	const dispatch = useAppDispatch()
	const durationRange = useRef<HTMLInputElement>(null)
	const { pause, duration, currentDuration } = useAppSelector(selectAudio)
	const onClickPause = useCallback(() => dispatch(setStatus(true)), [dispatch])
	const onClickResume = useCallback(() => dispatch(setStatus(false)), [dispatch])

	return (
		<div className={cn(styles.root, className)} {...props}>
			<div className={styles.actions}>
				<button className={styles.button}>
					<PlayerIconArrowLeft />
				</button>
				<button
					onClick={() => dispatch(setStatus(!pause))}
					className={cn(styles.button, styles.buttonFill)}>
					{pause ? (
						<PlayerIconPause onClick={onClickPause} />
					) : (
						<PlayerIconResume onClick={onClickResume} />
					)}
				</button>
				<button className={styles.button}>
					<PlayerIconArrowRight />
				</button>
			</div>
			<div className={styles.body}>
				<span className={cn(styles.currentStart, styles.timestamps)}>
					{convertTime(currentDuration)}
				</span>
				<div className={styles.range}>
					<input ref={durationRange} className={styles.controls} type={"range"} min={0} max={100} />
					<span style={{ width: currentDuration + "%" }} className={styles.rangeLine} />
					<span style={{ left: currentDuration + "%" }} className={styles.rangeDot} />
				</div>
				<span className={cn(styles.currentEnd, styles.timestamps)}>{duration}</span>
			</div>
		</div>
	)
}

export default Player
