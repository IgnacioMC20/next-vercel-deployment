import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

type NextPageWithLayout = NextPage & {
  getLayout?: ( page: ReactElement ) => ReactNode;
}

type AppsPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppsPropsWithLayout ) {

  const getLayout = Component.getLayout || ((page) => page);

  // return <Component {...pageProps} />

  return (getLayout(<Component {...pageProps} />))
}

export default MyApp
