import type { AppProps } from "next/app";
import Head from "next/head";
import { GlobalStyle } from "src/styles/globalStyle";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>한세사이버보안고등학교 보안관제 동아리</title>
			</Head>
			<GlobalStyle />
			<Component {...pageProps} />;
		</>
	);
}

export default MyApp;
