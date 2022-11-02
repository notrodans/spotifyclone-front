import { useEffect, useRef, useState } from "react"

export const useClickOutside = (openState = false) => {
	const [isShow, setIsShow] = useState(openState)
	const ref = useRef(null)

	useEffect(() => {
		const openFunc = (e: Event) => {
			if (ref.current && !ref.current.contains(e.target)) {
				setIsShow(false)
			}
		}

		document.addEventListener("click", openFunc, true)
		return () => document.removeEventListener("click", openFunc, true)
	}, [isShow])

	return { isShow, setIsShow, ref }
}
