import React, { useRef } from 'react';

import styles from '../../Navbar.module.scss';

import { useOutsideClickListener } from '../../../../../utils/hooks/useOutsideClickListener';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
  closePopup: () => void;
}

const AvailableLanguagesPopup: React.FC<Props> = ({ closePopup }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { pathname } = useRouter();

  useOutsideClickListener(ref, closePopup);

  return (
    <div ref={ref} className={styles.availableLanguagesPopupContainer}>
      <div className={styles.availableLanguagesPopup}>
        <Link href={pathname} locale="en">
          <div className={styles.option}>english</div>
        </Link>

        <Link href={pathname} locale="ar">
          <div className={`${styles.option} ${styles.ar}`}>العربية</div>
        </Link>
      </div>
    </div>
  );
};

export { AvailableLanguagesPopup };
