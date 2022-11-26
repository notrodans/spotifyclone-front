import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import "../styles/style.scss"

import { wrapper } from "@redux/store"
import ReactModal from "react-modal"
import WrapperApp from "@layouts/WrapperApp"

const App = ({ Component, ...pageProps }: AppProps) => {
	const { store, props } = wrapper.useWrappedStore(pageProps)
	ReactModal.setAppElement("#__next")

	return (
		<Provider store={store}>
			<WrapperApp>
				<Component {...props.pageProps} />
			</WrapperApp>
		</Provider>
	)
}

export default App
