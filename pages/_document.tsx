import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
	return (
		<Html>
			<Head>
			<link
				rel="preload"
				href="/fonts/MonumentExtended-Regular.otf"
				as="font"
				type="font/otf"
				crossOrigin=""/>
				<link
				rel="preload"
				href="/fonts/MonumentExtended-Ultrabold.otf"
				as="font"
				type="font/otf"
				crossOrigin=""/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

export default Document;
