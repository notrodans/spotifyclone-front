import Meta from "@components/SEO/Meta";
import ProfileComponent from "@components/screens/Profile";
import Wrapper from "@layouts/Wrapper";
import { IUser } from "@services/Auth/AuthService.type";
import { getUser } from "@util/getUser";
import type { GetServerSideProps, NextPage } from "next";

interface IProfile {
	userData: IUser;
}

const Profile: NextPage<IProfile> = ({ userData }) => {
	return (
		<>
			<Meta title='Профиль' description='ProfilePage' />
			<Wrapper userData={userData}>
				<ProfileComponent />
			</Wrapper>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = getUser;

export default Profile;
