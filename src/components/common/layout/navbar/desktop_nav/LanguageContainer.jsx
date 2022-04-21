import React, { useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';

// style
import styles from '../../../../../styles/navbar.module.scss';

// redux
import { setPreferences } from '../../../../../redux/actions/userActions';

// helpers
import { LANGUAGES } from '../../../../../utils/constants';

// images and icons
import languageIcon from '../../../../../../public/svg/language_icon.svg';

const LanguageContainer = () => {
  const [cookies] = useCookies(['i18next']);
  const dispatch = useDispatch();

  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [languageSelected, setLanguageSelected] = useState(cookies.i18next || 'ع');

  useEffect(() => {
    if (cookies.i18next) {
      setLanguageSelected(cookies.i18next);
      dispatch(setPreferences({ language: cookies.i18next }));
    }
  }, [cookies.i18next]);

  return (
    <div className={styles.languageContainer} onClick={() => setIsOptionsOpen(true)}>
      <div className={styles.iconContainer}>
        <ReactSVG className={styles.languageIcon} src={languageIcon.src} />
      </div>
      <p className={languageSelected === 'ع' ? styles.ar : ''}>{languageSelected}</p>

      {isOptionsOpen && <OptionsContainer closeOptions={() => setIsOptionsOpen(false)} />}
    </div>
  );
};

const OptionsContainer = ({ closeOptions }) => {
  useEffect(() => {
    const handleClick = () => closeOptions();
    window.addEventListener('click', handleClick);

    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className={styles.options} id="languagesContainer">
      {LANGUAGES.map((lang, index) => {
        return <Option key={index} lang={lang} />;
      })}
    </div>
  );
};

const Option = ({ lang }) => {
  const [_, setCookies] = useCookies(['i18next']);

  const handleClick = () => {
    setCookies('i18next', lang.shortcut, { path: '/' });
  };

  return (
    <p
      className={`${styles.option} ${lang.shortcut === 'ع' ? styles.ar : ''}`}
      onClick={handleClick}
    >
      {lang.value}
    </p>
  );
};

export default LanguageContainer;
