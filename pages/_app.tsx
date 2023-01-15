import "../styles/style.scss";
import { wrapper } from "@redux/store";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

const App = ({ Component, ...pageProps }: AppProps) => {
	const { store, props } = wrapper.useWrappedStore(pageProps);

	return (
		<Provider store={store}>
			<Component {...props.pageProps} />
		</Provider>
	);
};

export default App;
