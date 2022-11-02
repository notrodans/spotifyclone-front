import cn from "classnames"
import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren } from "react"

import Header from "@components/common/Header/Header"

interface IWrapperWithoutPlayer
	extends PropsWithChildren,
		DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const WrapperWithoutPlayer: FC<IWrapperWithoutPlayer> = ({
	className,
	children
}) => {
	return (
		<div className='wrapper'>
			<Header />
			<div className='wrapper__body'>
				<main className={cn("page", className)}>{children}</main>
			</div>
		</div>
	)
}

export default WrapperWithoutPlayer
