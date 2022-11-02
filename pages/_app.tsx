import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import "../styles/style.scss"

import { wrapper } from "@redux/store"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

const App = ({ Component, ...pageProps }: AppProps) => {
	const { store, props } = wrapper.useWrappedStore(pageProps)

	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<Component {...props.pageProps} />
			</Provider>
		</QueryClientProvider>
	)
}

export default App
