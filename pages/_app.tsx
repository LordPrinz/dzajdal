import "../index.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Dzajdal</title>
				<meta name="description" content="Dzajdal music player" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>

			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
