import { FC } from "react"

import Meta from "@components/SEO/Meta"
import FavoriteBody from "@components/common/FavoriteBody/FavoriteBody"
import Wrapper from "@layouts/Wrapper"
import { IUser } from "@services/Auth/AuthService.type"

interface IFavorite {
	userData: IUser
}

const Favorite: FC<IFavorite> = ({ userData }) => {
	return (
		<>
			<Meta title={"Избранные"} description={"FavoritePage"} />
			<Wrapper userData={userData}>
				<FavoriteBody />
			</Wrapper>
		</>
	)
}
export default Favorite
