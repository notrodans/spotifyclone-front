import cn from "classnames"
import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren } from "react"

import Header from "@components/common/Header/Header"
import { IUser } from "@services/Auth/AuthService.type"

interface IWrapperWithoutPlayer
	extends PropsWithChildren,
		DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	userData: IUser
}

const WrapperWithoutPlayer: FC<IWrapperWithoutPlayer> = ({ userData, className, children }) => {
	return (
		<div className='wrapper'>
			<Header userData={userData} />
			<div className='wrapper__body'>
				<main className={cn("page", className)}>{children}</main>
			</div>
		</div>
	)
}

export default WrapperWithoutPlayer
