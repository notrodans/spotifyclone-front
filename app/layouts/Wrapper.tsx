import cn from 'classnames'
import { FC, HTMLAttributes, PropsWithChildren } from 'react'

import Footer from '@/components/common/Footer/Footer'
import Header from '@/components/common/Header/Header'
import Sidebar from '@/components/common/Sidebar/Sidebar'

interface IWrapper extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {}

const Wrapper: FC<IWrapper> = ({ className, children }) => {
	return (
		<>
			<div className='wrapper'>
				<Header />
				<div className='wrapper__body'>
					<Sidebar />
					<main className={cn('page', className)}>{children}</main>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default Wrapper
