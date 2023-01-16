import { axiosWithTokenSSR } from "@axios/axiosInstance";
import Meta from "@components/SEO/Meta";
import Wrapper from "@layouts/Wrapper";
import { authActions } from "@redux/slices/auth/auth.slice";
import { wrapper } from "@redux/store";
import { IUser, UserModel } from "@services/Auth/AuthService.type";
import * as jwt from "jsonwebtoken";
import { GetServerSideProps, NextPage } from "next";
import * as nookies from "nookies";

interface IArtistPage {
	userData: IUser;
	artist: UserModel;
}

const Artist: NextPage<IArtistPage> = ({ artist, userData }) => {
	return (
		<>
			<Meta title={artist?.login} description='Artist' />
			<Wrapper userData={userData}>Artist: {artist?.email}</Wrapper>{" "}
		</>
	);
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
	store => async ctx => {
		const $axiosWithTokenSSR = axiosWithTokenSSR(ctx);
		const { params } = ctx;
		try {
			const token = nookies.parseCookies(ctx)?.access;
			const user = jwt.decode(token) as IUser;
			const { data: userData } = await $axiosWithTokenSSR.get<UserModel>(
				"artist/me/" + user?.email
			);
			const { data: artist } = await $axiosWithTokenSSR.get<UserModel>(
				"http://localhost:5050/api/artist/find/" + params.id
			);
			store.dispatch(authActions.setUser(userData));
			return {
				props: {
					userData,
					artist
				}
			};
		} catch (e: any) {
			if (e?.response?.status === 404) {
				return {
					notFound: true
				};
			}
			if (e?.response?.status === 401) {
				return {
					redirect: {
						destination: `/artist/${params.id}`,
						permanent: true
					}
				};
			}
		}
	}
);

export default Artist;
