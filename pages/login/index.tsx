import Meta from "@components/SEO/Meta";
import LoginComponent from "@components/screens/Login";
import Wrapper from "@layouts/Wrapper";
import { IUser } from "@services/Auth/AuthService.type";
import { getUserExisted } from "@util/getUserExisted";
import type { GetServerSideProps, NextPage } from "next";

interface ILoginPage {
	userData: IUser;
}

const LoginPage: NextPage<ILoginPage> = ({ userData }) => (
	<>
		<Meta title='Авторизация' description='LoginPage' />
		<Wrapper userData={userData}>
			<LoginComponent />
		</Wrapper>
	</>
);

export const getServerSideProps: GetServerSideProps = getUserExisted;

export default LoginPage;
