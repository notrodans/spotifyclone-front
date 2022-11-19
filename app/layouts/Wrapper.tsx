import cn from "classnames"
import { FC, HTMLAttributes, PropsWithChildren } from "react"

import Footer from "@components/common/Footer/Footer"
import Header from "@components/common/Header/Header"
import Sidebar from "@components/common/Sidebar/Sidebar"
import { IUser } from "@services/Auth/AuthService.type"

interface IWrapper extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
	userData: IUser
}

const Wrapper: FC<IWrapper> = ({ userData, className, children }) => {
	const user = userData ? { ...userData } : null
	return (
		<>
			<div className='wrapper'>
				<Header userData={userData} />
				<div className='wrapper__body'>
					<Sidebar />
					<main className={cn("page", className)}>{children}</main>
				</div>
				{user && <Footer />}
			</div>
		</>
	)
}

export default Wrapper
