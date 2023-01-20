import Meta from "@components/SEO/Meta";
import UploadComponent from "@components/screens/Upload";
import Wrapper from "@layouts/Wrapper";
import { IUser } from "@services/Auth/AuthService.type";
import { getUser } from "@util/getUser";
import type { NextPage } from "next";

interface IUploadPage {
	user: IUser;
}

const UploadPage: NextPage<IUploadPage> = ({ user }) => {
	return (
		<>
			<Meta title='Загрузка треков' description='Upload Tracks' />
			<Wrapper user={user}>
				<UploadComponent />
			</Wrapper>
		</>
	);
};

export const getServerSideProps = getUser;

export default UploadPage;
