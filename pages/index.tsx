import type { NextPage } from 'next'

import Meta from '@/components/SEO/Meta'
import Home from '@/components/screens/home/Home'

const HomePage: NextPage = () => {
	return (
		<>
			<Meta title='Главная' description='Best team is Asirix' />
			<Home />
		</>
	)
}

export default HomePage
