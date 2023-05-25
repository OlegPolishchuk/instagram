import 'react-toastify/dist/ReactToastify.css';
import '../styles/nprogress.css';
import '@/styles/globals.css';

import React, { ReactElement } from 'react';

import { NextPage } from 'next';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { AuthLayout } from '@/components';
import { useLoader } from '@/shared/hooks';
import { wrapper } from '@/store/store';

export type NextPageWithLayout<P = object> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactElement;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const { store } = wrapper.useWrappedStore(pageProps);
  const getLayout = Component.getLayout ?? (page => page);

  useLoader();

  return getLayout(
    <Provider store={store}>
      <AuthLayout>
        <Component {...pageProps} />

        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </AuthLayout>
    </Provider>,
  );
}

export default appWithTranslation(App);
