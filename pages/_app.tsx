import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import '../styles/style.scss'

import { wrapper } from '@/redux/store'

const App = ({ Component, router: { route }, ...pageProps }: AppProps) => {
	const { store, props } = wrapper.useWrappedStore(pageProps)

	return (
		<Provider store={store}>
			<Component key={route} {...props.pageProps} />
		</Provider>
	)
}

export default App
