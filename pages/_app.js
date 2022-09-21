import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache';

// CONTEXT
import { BkAppContextProvider } from '../src/context/store';

// BKOOL
import BkPublicLayout from '../components/layout/public-layout';
import BkLibLayout from '../components/layout/lib-layout';
import '../styles/global.css';
import BkGiroLayout from '../components/layout/giro-layout';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<BkAppContextProvider>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				{/* <BkLibLayout> */}
				<BkGiroLayout>
					<Component {...pageProps} />
				</BkGiroLayout>
				{/* </BkLibLayout> */}
			</BkAppContextProvider>
		</CacheProvider>
	);
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	emotionCache: PropTypes.object,
	pageProps: PropTypes.object.isRequired,
};
