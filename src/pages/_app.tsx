import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
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

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_BACK_URL;

function MyApp({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch();

  const {
    loading,
    isAuthenticated,
    profileInfo: { generalInfo },
  } = useSelector(state => state.authUser);

  useEffect(() => {
    if (isAuthenticated) {
      connectSocket(generalInfo.user_id, dispatch);
      return;
    }

    checkForTokenAndSetAuthUser(dispatch);
  }, [isAuthenticated]);

  return (
    <>
      {loading ? (
        <div style={{ height: '100vh', width: '100vw' }}>
          <Spinner style={{ fontSize: 12, top: '40vh', color: '#000' }} />
        </div>
      ) : (
        <CookiesProvider>
          <Component {...pageProps} />
        </CookiesProvider>
      )}
    </>
  );
}

//withRedux wrapper that passes the store to the App Component
export default wrapper.withRedux(appWithTranslation(MyApp));
