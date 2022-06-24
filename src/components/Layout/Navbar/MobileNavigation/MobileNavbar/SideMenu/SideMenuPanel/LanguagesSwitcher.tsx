import { useRouter } from 'next/router';
import React from 'react';

import styles from '../../../../Navbar.module.scss';

const LanguagesSwitcher = () => {
  const { locale, push, asPath } = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    push(asPath, asPath, { locale: e.target.value });
  };

  return (
    <div className={styles.languagesSwitcher}>
      <select name="language" value={locale} onChange={handleChange}>
        <option value="en">en</option>
        <option value="ar">ع</option>
      </select>
    </div>
  );
};

export { LanguagesSwitcher };
