import React from 'react';
import Link from 'next/link';
import { ReactSVG } from 'react-svg';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import styles from './NeedAuthPopup.module.scss';

import { ICONS } from '../../../utils/constants/Icons';

import type { PopupProps } from '../PopupProps';

import { BasePopup } from '../../common/BasePopup/BasePopup';
import { Button } from '../../common/Button/Button';

interface Props extends PopupProps {}

const NeedAuthPopup: React.FC<Props> = ({ closePopup }) => {
  const { t } = useTranslation('common');

  return (
    <BasePopup closePopup={closePopup}>
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <ReactSVG src={ICONS.ERROR} />
        </div>

        <p>{t('need-login')}</p>

        <div className={styles.buttonsContainer}>
          <Link href="/signup">
            <Button variant="greyOutline" size="sm">
              {t('signup')}
            </Button>
          </Link>

          <Link href="/login">
            <Button variant="greyFilled" size="sm">
              {t('login')}
            </Button>
          </Link>
        </div>
      </div>
    </BasePopup>
  );
};

export { NeedAuthPopup };
