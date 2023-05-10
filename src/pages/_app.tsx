import '@/styles/globals.css';
import { ReactElement } from 'react';

import { NextPage } from 'next';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { useLoader } from '@/shared/hooks';
import { store } from '@/store/store';

import '../styles/nprogress.css';

export type NextPageWithLayout<P = object> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactElement;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page);

  useLoader();

  return getLayout(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>,
  );
}

export default appWithTranslation(App);
