import Head from "next/head";

import '../styles/globals.scss';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1"/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
