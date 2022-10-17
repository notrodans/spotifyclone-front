import { FC, PropsWithChildren } from 'react'

import Footer from '@/components/common/Footer/Footer'
import Header from '@/components/common/Header/Header'
import Sidebar from '@/components/common/Sidebar/Sidebar'

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<div className='wrapper'>
				<Header />
				<div className='wrapper__body'>
					<Sidebar />
					<main className='page'>{children}</main>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default Wrapper
