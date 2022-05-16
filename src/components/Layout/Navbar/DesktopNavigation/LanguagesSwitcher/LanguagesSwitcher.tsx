import React, { useState } from 'react';

import styles from '../../Navbar.module.scss';

import { AvailableLanguagesPopup } from './AvailableLanguagesPopup';
import { SelectedLanguage } from './SelectedLanguage';

const LanguagesSwitcher: React.FC = () => {
  const [isAvailableLangugesPopupOpen, setIsAvailableLangugesPopupOpen] = useState(false);

  return (
    <div className={styles.languagesSwitcher}>
      <SelectedLanguage openAvailableLanguagesPopup={() => setIsAvailableLangugesPopupOpen(true)} />

      {isAvailableLangugesPopupOpen && (
        <AvailableLanguagesPopup closePopup={() => setIsAvailableLangugesPopupOpen(false)} />
      )}
    </div>
  );
};

export { LanguagesSwitcher };
