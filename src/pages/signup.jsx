import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

// style
import styles from '../styles/signup.module.scss';

// images and icons
import signupImg from '../../public/images/signup.png';

// redux
import { clearErrors } from '../redux/reducers/UISlice';
import { signupUserGetAuthTokenAndPushToHome } from '../redux/actions/userActions';

// components
import ChooseTypeSlide from '../components/signup/ChooseTypeSlide';
import CreateNormalUser from '../components/signup/CreateNormalUser';
import CreateAssociation from '../components/signup/CreateAssociation';
import Buttons from '../components/signup/Buttons';
import PageMetaData from '../components/common/others/PageMetaData';
import Layout from '../components/common/layout/Layout';
import Image from 'next/image';

export default function Signup() {
  const {
    authUser: { isAuthenticated },
  } = useSelector(state => state);
  const dispatch = useDispatch();
  const router = useRouter();

  const initialState = {
    roleId: null,
    associationName: '',
    firstName: '',
    lastName: '',
    gender: '',
    birthday: null,
    phoneNum: '',
    wilaya: null,
    commun: '',
    email: '',
    password: '',
    confirmPassword: '',
    associationDocs: [],
  };

  const [signupInputValues, setSignupInputValues] = useState(initialState);

  const initializeState = () => {
    setSignupInputValues(initialState);
    dispatch(clearErrors());
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();

    for (const [key, value] of Object.entries(signupInputValues)) {
      if (key !== 'associationDocs') {
        formData.append(key, value);
      } else {
        value.map(doc => {
          formData.append(key, doc, doc.name);
        });
      }
    }
    dispatch(signupUserGetAuthTokenAndPushToHome(formData, router));
  };

  useEffect(() => {
    if (isAuthenticated) router.back();

    return () => dispatch(clearErrors());
  }, []);

  return (
    <Layout withoutFooter>
      <div className={styles.signup}>
        <PageMetaData title={'Sadaqa صدقة | Signup'} />

        <section className={styles.imgContainer}>
          <Image
            placeholder="blur"
            src={signupImg}
            alt="girl with his father put donations in a box"
          />
        </section>

        <section className={styles.signupInputsSection}>
          <form onSubmit={handleSubmit}>
            {!signupInputValues.roleId ? (
              <ChooseTypeSlide
                inputValues={signupInputValues}
                setInputValues={setSignupInputValues}
              />
            ) : signupInputValues.roleId === 1 ? (
              <CreateNormalUser
                inputValues={signupInputValues}
                setInputValues={setSignupInputValues}
                handleSubmit={handleSubmit}
              />
            ) : (
              signupInputValues.roleId === 2 && (
                <CreateAssociation
                  inputValues={signupInputValues}
                  setInputValues={setSignupInputValues}
                  handleSubmit={handleSubmit}
                />
              )
            )}

            <Buttons
              handleSubmit={handleSubmit}
              roleId={signupInputValues.roleId}
              initializeState={initializeState}
            />
          </form>
        </section>
      </div>
    </Layout>
  );
}
