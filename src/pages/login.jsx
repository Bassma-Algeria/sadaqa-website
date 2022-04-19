import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

// styles
import styles from '../styles/login.module.scss';

// images
import loginImg from '../public/images/login.png';
import logo from '../public/images/sadaqa-logo.png';

// redux
import { clearErrors } from '../redux/reducers/UISlice';
import { loginUserGetAuthTokenAndPushToHome } from '../redux/actions/userActions';

// components
import Button from '../components/common/buttons/Button';
import Spinner from '../components/common/loaders/Spinner';
import PageMetaData from '../components/common/others/PageMetaData';
import Inputs from '../components/login/Inputs';
import Layout from '../components/common/layout/Layout';
import Image from 'next/image';

export default function Login() {
  const {
    UI: { loading },
    authUser: { isAuthenticated },
  } = useSelector(state => state);

  const dispatch = useDispatch();
  const router = useRouter();

  const [loginInputValues, setLoginInputValues] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUserGetAuthTokenAndPushToHome(loginInputValues, router));
  };

  useEffect(() => {
    if (isAuthenticated) router.back();

    return () => dispatch(clearErrors());
  }, []);

  return (
    <Layout withoutFooter>
      <div className={styles.login}>
        <PageMetaData title={'Sadaqa صدقة | login'} />

        <section className={styles.imgContainer}>
          <Image placeholder="blur" src={loginImg} alt="woman put donations in a box" />
        </section>

        <section className={styles.loginInputsSection}>
          <h1>Log in</h1>

          <form onSubmit={handleSubmit}>
            <Inputs inputValues={loginInputValues} setInputValues={setLoginInputValues} />
            <Button primary full size="md" type="submit" style={{ height: 52 }}>
              {loading ? <Spinner /> : 'Login'}
            </Button>
          </form>

          <p>
            Didn&apos;t have an account? <Link href="/signup">Sign up</Link>
          </p>
        </section>
      </div>
    </Layout>
  );
}
