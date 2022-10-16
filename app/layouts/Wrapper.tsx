import { FC, PropsWithChildren } from 'react'

import Noise from '@/components/UI/Noise'
import Footer from '@/components/common/Footer/Footer'
import Header from '@/components/common/Header/Header'

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Noise />
			<div className='wrapper'>
				<Header />
				<main className='page'>{children}</main>
				<Footer />
			</div>
		</>
	)
}

export default Wrapper
