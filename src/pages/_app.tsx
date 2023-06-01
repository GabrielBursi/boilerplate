import type { AppProps } from "next/app"
import Head from "next/head"
import { ThemeProvider } from "styled-components"
import { GlobalStyles, theme } from "@/src/styles"

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Head>
				<title>Boilerplate</title>
			</Head>
			<GlobalStyles/>
			<Component {...pageProps} />
		</ThemeProvider>
	)
}
