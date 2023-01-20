import Meta from "@components/SEO/Meta";
import HomeComponent from "@components/screens/Home";
import Wrapper from "@layouts/Wrapper";
import { IUser } from "@services/Auth/AuthService.type";
import { getUser } from "@util/getUser";
import type { NextPage } from "next";

interface IHomePage {
	user: IUser;
}

const HomePage: NextPage<IHomePage> = ({ user }) => {
	return (
		<>
			<Meta title='Главная' description='GeneralPage' />
			<Wrapper user={user}>
				<HomeComponent />
			</Wrapper>
		</>
	);
};

export const getServerSideProps = getUser;

export default HomePage;
