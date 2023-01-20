import Meta from "@components/SEO/Meta";
import FavoriteComponent from "@components/screens/Favorite";
import Wrapper from "@layouts/Wrapper";
import { IUser } from "@services/Auth/AuthService.type";
import { getUser } from "@util/getUser";
import type { NextPage } from "next";

interface IFavorite {
	user: IUser;
}

const Favorite: NextPage<IFavorite> = ({ user }) => {
	return (
		<>
			<Meta title={"Избранные"} description={"FavoritePage"} />
			<Wrapper user={user}>
				<FavoriteComponent />
			</Wrapper>
		</>
	);
};

export const getServerSideProps = getUser;

export default Favorite;
