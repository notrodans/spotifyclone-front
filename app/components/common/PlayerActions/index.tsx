import PlayerVolumeHigh from "@assets/icons-components/PlayerVolumeHigh"
import PlayerVolumeLow from "@assets/icons-components/PlayerVolumeLow"
import PlayerVolumeMedium from "@assets/icons-components/PlayerVolumeMedium"
import PlayerVolumeOff from "@assets/icons-components/PlayerVolumeOff"
import { DetailedHTMLProps, FC, HTMLAttributes, useCallback, useRef, useState } from "react"
import cn from "classnames"

import styles from "./index.module.scss"
import PlayerIconQueue from "@assets/icons-components/PlayerIconQueue"

interface IPlayerActions
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

const PlayerActions: FC<IPlayerActions> = ({ className, ...props }) => {
	const [inputValue, setInputValue] = useState<number>(null)
	const input = useRef<HTMLInputElement>(null)

	const onClickVolume = useCallback(() => {
		setInputValue(prev => (prev === 0 ? 20 : 0))
	}, [])

	return (
		<div className={cn(styles.root, className)} {...props}>
			<button className={styles.button}>
				<PlayerIconQueue />
			</button>
			<button onClick={onClickVolume} className={styles.button}>
				{inputValue === 0 ? (
					<PlayerVolumeOff />
				) : inputValue < 25 ? (
					<PlayerVolumeLow />
				) : inputValue < 50 ? (
					<PlayerVolumeMedium />
				) : (
					<PlayerVolumeHigh />
				)}
			</button>
			<div className={styles.range}>
				<input
					ref={input}
					onChange={() => setInputValue(Number(input.current.value))}
					className={styles.controls}
					type={"range"}
					min={0}
					max={100}
				/>
				<span style={{ width: inputValue + "%" }} className={styles.rangeLine} />
				<span style={{ left: inputValue + "%" }} className={styles.rangeDot} />
			</div>
		</div>
	)
}

export default PlayerActions
