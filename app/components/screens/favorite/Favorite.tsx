import { FC } from 'react'

import styles from './Favorite.module.scss'
import Meta from '@/components/SEO/Meta'
import FavoriteBody from '@/components/common/FavoriteBody/FavoriteBody'
import Wrapper from '@/layouts/Wrapper'

const Favorite: FC = () => {
	return (
		<>
			<Meta title={'Избранные'} description={'FavoritePage'} />
			<Wrapper className={styles.page}>
				<FavoriteBody />
			</Wrapper>
		</>
	)
}
export default Favorite
