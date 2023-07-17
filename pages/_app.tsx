import React from 'react'
import Head from "next/head";

export default function App({ Component, pageProps }: {Component: React.FC, pageProps: any}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
