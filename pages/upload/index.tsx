import Meta from "@components/SEO/Meta";
import UploadComponent from "@components/screens/Upload";
import Wrapper from "@layouts/Wrapper";
import { IUser } from "@services/Auth/AuthService.type";
import { getUser } from "@util/getUser";
import type { NextPage } from "next";

interface IUploadPage {
	user: IUser;
}

const UploadPage: NextPage<IUploadPage> = () => {
	return (
		<>
			<Meta title='Загрузка треков' description='Upload Tracks' />
			<Wrapper>
				<UploadComponent />
			</Wrapper>
		</>
	);
};

export const getServerSideProps = getUser;

export default UploadPage;
