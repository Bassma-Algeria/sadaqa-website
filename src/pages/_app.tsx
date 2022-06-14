import React, { useEffect, useLayoutEffect } from 'react';
import App, { AppContext, AppProps } from 'next/app';
import { useSelector, useDispatch } from 'react-redux';
import { appWithTranslation } from 'next-i18next';
import { CookiesProvider } from 'react-cookie';
import axios from 'axios';

import '../styles/globals.scss';

// redux
import { wrapper } from '../redux/store';

// helpers
import { checkForTokenAndSetAuthUser } from '../utils/auth';

// socket
import { connectSocket } from '../socket';

// components
import Spinner from '../components/common/loaders/Spinner';
import { useAuthContext } from '../utils/hooks/useAuthContext';
import { setToken } from '../context/authenticationActions';
import { LocalStorage } from '../utils/helpers/LocalStorage';
import { AuthContextProvider } from '../context/AuthContextProvider';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_BACK_URL;

function MyApp({ Component, pageProps }: AppProps) {
  // const dispatch = useDispatch();

  // const {
  //   loading,
  //   isAuthenticated,
  //   profileInfo: { generalInfo },
  // } = useSelector(state => state.authUser);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     return connectSocket(generalInfo.user_id, dispatch);
  //   }

  //   checkForTokenAndSetAuthUser(dispatch);
  // }, [isAuthenticated]);

  return (
    <>
      {/* {loading ? (
        <div style={{ height: '100vh', width: '100vw' }}>
          <Spinner style={{ fontSize: 12, top: '40vh', color: '#000' }} />
        </div>
      ) : (
        <CookiesProvider>
          <Component {...pageProps} />
        </CookiesProvider>
      )} */}
      <CookiesProvider>
        <AuthContextProvider>
          <Page Component={Component} pageProps={pageProps} />
        </AuthContextProvider>
      </CookiesProvider>
    </>
  );
}

interface Props {
  Component: AppProps['Component'];
  pageProps: AppProps['pageProps'];
}

const Page: React.FC<Props> = ({ Component, pageProps }) => {
  const { dispatch, isAuthenticated } = useAuthContext();

  useEffect(() => {
    if (isAuthenticated) return;

    const token = LocalStorage.get('token');
    if (token) dispatch(setToken(token));
  }, []);

  return <Component {...pageProps} />;
};

export default wrapper.withRedux(appWithTranslation(MyApp));
