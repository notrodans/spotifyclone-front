import "../styles/style.scss";
import { UserProvider } from "@context/UserContext";
import { store } from "@redux/store";
import { IUser } from "@services/Auth/AuthService.type";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

const App = ({ Component, ...page }: IAppUserProps) => {
	const { user } = page.pageProps;
	return (
		<Provider store={store}>
			<UserProvider initialUser={user}>
				<Component {...page.pageProps} />
			</UserProvider>
		</Provider>
	);
};

export interface IAppUserProps extends AppProps {
	pageProps: {
		user: IUser;
	};
}

export default App;
