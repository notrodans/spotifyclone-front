import { DetailedHTMLProps, FC, HTMLAttributes, useCallback, useRef } from "react"
import cn from "classnames"

import styles from "./index.module.scss"
import { selectAudio } from "@redux/slices/audio/audio.slice"
import { useAppSelector } from "@redux/hooks"
import { useActions } from "@hooks/useActions"
import {
	PlayerIconQueue,
	PlayerVolumeHigh,
	PlayerVolumeLow,
	PlayerVolumeMedium,
	PlayerVolumeOff
} from "@assets/icons-components"

interface IPlayerActions
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const PlayerActions: FC<IPlayerActions> = ({ className, ...props }) => {
	const input = useRef<HTMLInputElement>(null)
	const { setVolume } = useActions()
	const { volume } = useAppSelector(selectAudio)

	const onClickVolume = useCallback(() => {
		setVolume(!volume ? 20 : 0)
	}, [setVolume, volume])

	return (
		<div className={cn(styles.root, className)} {...props}>
			<button className={styles.button}>
				<PlayerIconQueue />
			</button>
			<button onClick={onClickVolume} className={styles.button}>
				{volume === 0 ? (
					<PlayerVolumeOff />
				) : volume < 0.25 ? (
					<PlayerVolumeLow />
				) : volume < 0.5 ? (
					<PlayerVolumeMedium />
				) : (
					<PlayerVolumeHigh />
				)}
			</button>
			<div className={styles.range}>
				<input
					ref={input}
					onChange={() => setVolume(+input.current.value)}
					className={styles.controls}
					type={"range"}
					min={0}
					max={100}
				/>
				<span style={{ width: volume * 100 + "%" }} className={styles.rangeLine} />
				<span style={{ left: volume * 100 + "%" }} className={styles.rangeDot} />
			</div>
		</div>
	)
}

export default PlayerActions
