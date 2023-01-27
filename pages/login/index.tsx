import Meta from "@components/SEO/Meta";
import LoginComponent from "@components/screens/Login";
import Wrapper from "@layouts/Wrapper";
import { IUser } from "@services/Auth/AuthService.type";
import { getUserExisted } from "@util/getUserExisted";
import type { NextPage } from "next";

interface ILoginPage {
	user: IUser;
}

const LoginPage: NextPage<ILoginPage> = () => (
	<>
		<Meta title='Авторизация' description='LoginPage' />
		<Wrapper>
			<LoginComponent />
		</Wrapper>
	</>
);

export const getServerSideProps = getUserExisted;

export default LoginPage;
