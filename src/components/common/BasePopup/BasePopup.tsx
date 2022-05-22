import React, { useEffect } from 'react';
import { ReactSVG } from 'react-svg';
import { ICONS } from '../../../utils/constants/Icons';

import styles from './BasePopup.module.scss';

interface Props {
  selfClose?: boolean;
  closePopup: () => void;
}

const BasePopup: React.FC<Props> = ({ closePopup, selfClose = true, children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className={styles.container}>
      <Overlay closePopup={closePopup} selfClose={selfClose} />

      <div className={styles.content}>
        <CloseButton closePopup={closePopup} selfClose={selfClose} />

        {children}
      </div>
    </div>
  );
};

const Overlay: React.FC<Props> = ({ closePopup, selfClose }) => {
  const handleClick = () => {
    if (selfClose) closePopup();
  };

  return <div data-testid="overlay" className={styles.overlay} onClick={handleClick} />;
};

const CloseButton: React.FC<Props> = ({ closePopup, selfClose }) => {
  return selfClose ? (
    <div className={styles.closeButton}>
      <ReactSVG src={ICONS.CLOSE} onClick={closePopup} data-testid="closeButton" />
    </div>
  ) : null;
};

export { BasePopup };
