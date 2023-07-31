import type { AppProps } from "next/app"
import Head from "next/head"
import { ThemeProvider } from "styled-components"
import { Provider } from "react-redux"
import { GlobalStyles, theme } from "@/src/styles"
import { store } from "../redux"

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Head>
				<title>Boilerplate</title>
			</Head>
			<GlobalStyles/>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</ThemeProvider>
	)
}
