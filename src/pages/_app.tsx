import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Navbar } from "src/components";
import { GlobalStyle } from "src/styles/globalStyle";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<DefaultSeo
				title="HSOC | 한세사이버보안고등학교 보안관제 동아리"
				description="한세사이버보안고등학교 보안관제 동아리"
				canonical="https://hsoc.kr"
				openGraph={{
					type: "website",
					locale: "ko_KR",
					url: "https://hsoc.kr",
					title: "HSOC | 한세사이버보안고등학교 보안관제 동아리",
					description: "한세사이버보안고등학교 보안관제 동아리",
					images: [{ url: "https://hsoc.kr/og_thumbnail.png", width: 1200, height: 630 }],
					site_name: "HSOC | 한세사이버보안고등학교 보안관제 동아리",
				}}
			/>
			<GlobalStyle />
			<Navbar />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
