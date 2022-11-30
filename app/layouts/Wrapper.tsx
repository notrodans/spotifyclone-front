import cn from "classnames"
import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren } from "react"

import Footer from "@components/common/Footer"
import Header from "@components/common/Header"
import Sidebar from "@components/common/Sidebar"
import { IUser } from "@services/Auth/AuthService.type"

interface IWrapper
	extends PropsWithChildren,
		DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	userData?: IUser
}

const Wrapper: FC<IWrapper> = ({ userData, className, children }) => {
	return (
		<>
			<div className='wrapper'>
				<Header />
				<div className='wrapper__body'>
					{userData && <Sidebar />}
					<main className={cn("page", className)}>{children}</main>
				</div>
				{userData && <Footer />}
			</div>
		</>
	)
}

export default Wrapper
