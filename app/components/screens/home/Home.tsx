import { FC } from 'react'

import Meta from '@/components/SEO/Meta'
import Main from '@/components/common/Main/Main'
import Wrapper from '@/layouts/Wrapper'

const Home: FC = () => {
	return (
		<>
			<Meta title='Главная' description='Best team is Asirix' />
			<Wrapper>
				<Main />
			</Wrapper>
		</>
	)
}

export default Home
