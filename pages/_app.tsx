import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import "../styles/style.scss"

import { wrapper } from "@redux/store"
import ReactModal from "react-modal"

const App = ({ Component, ...pageProps }: AppProps) => {
	const { store, props } = wrapper.useWrappedStore(pageProps)
	ReactModal.setAppElement("#__next")

	return (
		<Provider store={store}>
			<Component {...props.pageProps} />
		</Provider>
	)
}

export default App
