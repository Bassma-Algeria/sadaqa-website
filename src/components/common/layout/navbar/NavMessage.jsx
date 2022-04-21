import React, { useEffect } from 'react';
import { ReactSVG } from 'react-svg';
import { useSelector, useDispatch } from 'react-redux';

// styles
import styles from '../../../../styles/navbar.module.scss';

// images and icons
import closeIcon from '../../../../../public/svg/close_icon.svg';

// redux
import { removeNavMessage, setNavMessage } from '../../../../redux/reducers/UISlice';

const NavMessage = ({ success, text }) => {
  const {
    navMessage: { text: navText, display },
  } = useSelector(state => state.UI);
  const dispatch = useDispatch();

  useEffect(() => {
    if (display) {
      dispatch(setNavMessage(text));
    }
  }, []);

  return (
    <div
      className={`${styles.navMessage} ${success ? styles.success : styles.warning} ${
        !display && styles.hide
      }`}
    >
      <div className={styles.iconContainer} onClick={() => dispatch(removeNavMessage())}>
        <ReactSVG src={closeIcon.src} />
      </div>
      <p>{navText}</p>
    </div>
  );
};

export default NavMessage;
