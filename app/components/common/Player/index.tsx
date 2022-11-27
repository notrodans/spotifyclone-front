import { DetailedHTMLProps, FC, HTMLAttributes, useRef, useState } from "react"

import styles from "./index.module.scss"
import cn from "classnames"
import PlayerIconArrowLeft from "@assets/icons-components/PlayerIconArrowLeft"
import PlayerIconPause from "@assets/icons-components/PlayerIconPause"
import PlayerIconArrowRight from "@assets/icons-components/PlayerIconArrowRight"
import PlayerIconResume from "@assets/icons-components/PlayerIconResume"

interface IPlayer extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Player: FC<IPlayer> = ({ className, ...props }) => {
	const input = useRef<HTMLInputElement>(null)
	const [trackState, setTrackState] = useState<"pause" | "resume">()
	const [inputValue, setInputValue] = useState(null)

	return (
		<div className={cn(styles.root, className)} {...props}>
			<div className={styles.actions}>
				<button className={styles.button}>
					<PlayerIconArrowLeft />
				</button>
				<button
					onClick={() => setTrackState(trackState === "pause" ? "resume" : "pause")}
					className={cn(styles.button, styles.buttonFill)}>
					{trackState === "resume" ? <PlayerIconPause /> : <PlayerIconResume />}
				</button>
				<button className={styles.button}>
					<PlayerIconArrowRight />
				</button>
			</div>
			<div className={styles.body}>
				<span className={cn(styles.currentStart, styles.timestamps)}>0:00</span>
				<div className={styles.range}>
					<input
						ref={input}
						onChange={() => setInputValue(input.current.value)}
						className={styles.controls}
						type={"range"}
						min={0}
						max={100}
					/>
					<span style={{ width: inputValue + "%" }} className={styles.rangeLine} />
					<span style={{ left: inputValue + "%" }} className={styles.rangeDot} />
				</div>
				<span className={cn(styles.currentEnd, styles.timestamps)}>2:00</span>
			</div>
		</div>
	)
}

export default Player
