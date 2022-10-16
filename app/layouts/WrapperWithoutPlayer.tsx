import { FC, PropsWithChildren } from 'react'

import Header from '@/components/common/Header/Header'

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className='wrapper'>
			<Header />
			<div className='wrapper__body'>
				<main className='page'>{children}</main>
			</div>
		</div>
	)
}

export default Wrapper
