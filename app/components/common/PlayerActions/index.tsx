import PlayerVolumeHigh from "@assets/icons-components/PlayerVolumeHigh"
import PlayerVolumeLow from "@assets/icons-components/PlayerVolumeLow"
import PlayerVolumeMedium from "@assets/icons-components/PlayerVolumeMedium"
import PlayerVolumeOff from "@assets/icons-components/PlayerVolumeOff"
import { DetailedHTMLProps, FC, HTMLAttributes, useCallback, useRef, useState } from "react"
import cn from "classnames"

import styles from "./index.module.scss"
import PlayerIconQueue from "@assets/icons-components/PlayerIconQueue"
import { selectAudio, setVolume } from "@redux/slices/audio/audio.slice"
import { useAppDispatch, useAppSelector } from "@redux/hooks"

interface IPlayerActions
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

const PlayerActions: FC<IPlayerActions> = ({ className, ...props }) => {
	const input = useRef<HTMLInputElement>(null)
	const dispatch = useAppDispatch()
	const { volume } = useAppSelector(selectAudio)

	const onClickVolume = useCallback(() => {
		setVolume(!volume ? 20 : 0)
	}, [volume])

	return (
		<div className={cn(styles.root, className)} {...props}>
			<button className={styles.button}>
				<PlayerIconQueue />
			</button>
			<button onClick={onClickVolume} className={styles.button}>
				{volume === 0 ? (
					<PlayerVolumeOff />
				) : volume < 25 ? (
					<PlayerVolumeLow />
				) : volume < 50 ? (
					<PlayerVolumeMedium />
				) : (
					<PlayerVolumeHigh />
				)}
			</button>
			<div className={styles.range}>
				<input
					ref={input}
					onChange={() => dispatch(setVolume(+input.current.value))}
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
