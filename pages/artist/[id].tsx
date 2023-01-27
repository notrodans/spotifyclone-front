import Meta from "@components/SEO/Meta";
import Wrapper from "@layouts/Wrapper";
import { IUser, UserModel } from "@services/Auth/AuthService.type";
import { fetcherSSR } from "@util/fetchUser";
import * as jwt from "jsonwebtoken";
import { GetServerSideProps, NextPage } from "next";
import * as nookies from "nookies";

interface IArtistPage {
	user: IUser;
	artist: UserModel;
}

const Artist: NextPage<IArtistPage> = ({ artist }) => {
	return (
		<>
			<Meta title={artist.login} description='Artist' />
			<Wrapper>Artist: {artist.email}</Wrapper>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async ctx => {
	const { params } = ctx;
	try {
		const token = nookies.parseCookies(ctx)?.access;
		const user = jwt.decode(token) as IUser;
		const [, userData] = await fetcherSSR<UserModel>(ctx, "artist/me/" + user.email);
		const [, artist] = await fetcherSSR<UserModel>(
			ctx,
			"http://localhost:5050/api/artist/find/" + params.id
		);
		if (!artist) {
			return {
				notFound: true
			};
		}
		if (!userData) {
			return {
				redirect: {
					statusCode: 307,
					destination: "/"
				}
			};
		}
		return {
			props: {
				user: { login: userData.login, email: userData.email },
				artist
			}
		};
	} catch (error: any) {
		console.log(error.message);
	}
};

export default Artist;
