import type { AppProps } from 'next/app';
import Head from 'next/head';
import DemoBanner from '../components/DemoBanner';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Ecomerce Profit Prophet</title>
      </Head>
      <DemoBanner />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;