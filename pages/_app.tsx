import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { GlobalContextProvider } from '../State';
import '../styles/global.css';
import React from 'react';


const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (<GlobalContextProvider>
    <Component {...pageProps} />
  </GlobalContextProvider>);
};

export default App;
