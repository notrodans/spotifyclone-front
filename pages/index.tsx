import Meta from "@components/SEO/Meta";
import HomeComponent from "@components/screens/Home";
import Wrapper from "@layouts/Wrapper";
import { IUser } from "@services/Auth/AuthService.type";
import { getUser } from "@util/getUser";
import type { NextPage } from "next";

interface IHomePage {
	userData: IUser;
}

const HomePage: NextPage<IHomePage> = ({ userData }) => {
	return (
		<>
			<Meta title='Главная' description='GeneralPage' />
			<Wrapper userData={userData}>
				<HomeComponent />
			</Wrapper>
		</>
	);
};

export const getServerSideProps = getUser;

export default HomePage;
