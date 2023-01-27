import Meta from "@components/SEO/Meta";
import SignupComponent from "@components/screens/Signup";
import Wrapper from "@layouts/Wrapper";
import { IUser } from "@services/Auth/AuthService.type";
import { getUserExisted } from "@util/getUserExisted";
import type { NextPage } from "next";

interface ISignupPage {
	user: IUser;
}

const SignupPage: NextPage<ISignupPage> = () => {
	return (
		<>
			<Meta title='Регистрация' description='Signup' />
			<Wrapper>
				<SignupComponent />
			</Wrapper>
		</>
	);
};

export const getServerSideProps = getUserExisted;

export default SignupPage;
