import React from 'react';
import { useRouter } from 'next/router';

import styles from '../../../../Navbar.module.scss';

import { Separator } from './Separator';
import { DonationsLinks } from './DonationsLinks';
import { LanguagesSwitcher } from './LanguagesSwitcher';
import { PeopleNeedHelpLinks } from './PeopleNeedHelpLinks';
import { LoginButtonsOrProfile } from './LoginButtonsOrProfile';

const SideMenuPanel: React.FC = () => {
  const { locale } = useRouter();

  return (
    <div className={`${styles.sideMenuPanel} ${styles[locale!]}`}>
      <LanguagesSwitcher />
      <LoginButtonsOrProfile />
      <Separator />
      <PeopleNeedHelpLinks />
      <Separator />
      <DonationsLinks />
    </div>
  );
};

export { SideMenuPanel };
