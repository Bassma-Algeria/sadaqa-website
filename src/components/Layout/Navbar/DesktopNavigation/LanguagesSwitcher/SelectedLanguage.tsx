import React from 'react';
import { useRouter } from 'next/router';
import { ReactSVG } from 'react-svg';

import styles from '../../Navbar.module.scss';

import { ICONS } from '../../../../../utils/constants/Icons';

interface Props {
  openAvailableLanguagesPopup: () => void;
}

const SelectedLanguage: React.FC<Props> = ({ openAvailableLanguagesPopup }) => {
  const { locale } = useRouter();

  return (
    <div className={styles.selectedLanguage} onClick={openAvailableLanguagesPopup}>
      <div className={styles.translateIconContainer}>
        <ReactSVG src={ICONS.TRANSLATE} />
      </div>

      <p>{LOCALS_MAPPER[locale!]}</p>
    </div>
  );
};

const LOCALS_MAPPER: any = {
  en: 'en',
  ar: 'ع',
};

export { SelectedLanguage };
