import Meta from "@components/SEO/Meta";
import ProfileComponent from "@components/screens/Profile";
import Wrapper from "@layouts/Wrapper";
import { IUser } from "@services/Auth/AuthService.type";
import { getUser } from "@util/getUser";
import type { NextPage } from "next";

interface IProfile {
	user: IUser;
}

const Profile: NextPage<IProfile> = ({ user }) => {
	return (
		<>
			<Meta title='Профиль' description='ProfilePage' />
			<Wrapper user={user}>
				<ProfileComponent />
			</Wrapper>
		</>
	);
};

export const getServerSideProps = getUser;

export default Profile;
