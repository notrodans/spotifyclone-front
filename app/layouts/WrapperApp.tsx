// Здесь будет логика для треков

import { FC, PropsWithChildren, useEffect, useRef, useState } from "react"

interface IWrapperApp extends PropsWithChildren {}

const WrapperApp: FC<IWrapperApp> = ({ children }) => {
	const [wrapperState, setWrapperState] = useState(0)

	const ref = useRef(false)

	useEffect(() => {
		if (ref.current) {
			console.log(wrapperState)
		}
		console.log(wrapperState)
		setWrapperState(1)
		ref.current = true
	}, [wrapperState])

	return <>{children}</>
}

export default WrapperApp
