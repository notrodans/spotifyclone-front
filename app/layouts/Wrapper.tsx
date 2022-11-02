import cn from "classnames"
import { FC, HTMLAttributes, PropsWithChildren } from "react"

import Footer from "@components/common/Footer/Footer"
import Header from "@components/common/Header/Header"
import Sidebar from "@components/common/Sidebar/Sidebar"
import { useAuth } from "@hooks/useAuth"

interface IWrapper extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {}

const Wrapper: FC<IWrapper> = ({ className, children }) => {
	const { user } = useAuth()
	return (
		<>
			<div className='wrapper'>
				<Header />
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
