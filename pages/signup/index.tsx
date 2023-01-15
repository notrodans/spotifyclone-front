import Meta from "@components/SEO/Meta";
import SignupComponent from "@components/screens/Signup";
import Wrapper from "@layouts/Wrapper";
import { IUser } from "@services/Auth/AuthService.type";
import { getUserExisted } from "@util/getUserExisted";
import type { GetServerSideProps, NextPage } from "next";

interface ISignupPage {
	userData: IUser;
}

const SignupPage: NextPage<ISignupPage> = ({ userData }) => {
	return (
		<>
			<Meta title='Регистрация' description='Signup' />
			<Wrapper userData={userData}>
				<SignupComponent />
			</Wrapper>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = getUserExisted;

export default SignupPage;
