import "../index.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "../store/store";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return (
		<SessionProvider session={session}>
			<Provider store={store}>
				<Head>
					<title>Dzajdal</title>
					<meta name="description" content="Dzajdal music player" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				</Head>

				<Component {...pageProps} />
			</Provider>
		</SessionProvider>
	);
}

export default MyApp;
