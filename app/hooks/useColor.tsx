import { FastAverageColor } from "fast-average-color"
import { useCallback, useEffect, useRef, useState } from "react"

export const useColor = (url: string) => {
	const [fac, setFac] = useState<FastAverageColor>(null)
	const [colorOfImage, setColorOfImage] = useState<string>(null)

	const isMount = useRef(false)

	const getColor = useCallback(
		async (url: string) => {
			if (url) {
				const { hex: color } = await fac.getColorAsync(url, { algorithm: "dominant" })
				return color
			}
			return "#fff"
		},
		[fac]
	)

	useEffect(() => {
		if (!isMount.current) {
			setFac(new FastAverageColor())
		}
		!isMount.current && (isMount.current = true)
	}, [])

	useEffect(() => {
		;(async () => {
			if (fac) {
				const color = await getColor(url)
				setColorOfImage(color)
			}
		})()
	}, [fac, getColor, url])

	return { colorOfImage }
}
