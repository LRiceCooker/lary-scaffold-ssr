import { AppProps } from "next/app";
import React from "react";
import MainProvider from "../src/providers/MainProvider";

const App = ({Component, pageProps}: AppProps) => {
  return (
    <MainProvider>
      <Component {...pageProps} />
    </MainProvider>
  )
}

export default App