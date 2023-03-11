import React from 'react';
import Link from 'next/link';

import styles from '../Register.module.scss';
import { useTranslation } from '../../../utils/hooks/useTranslation';
import { LocalIcons } from '../../../utils/constants/LocalIcons';

interface Props {
    openAssociationAccount: () => void;
    openIndividualAccount: () => void;
}

const ChooseUserType: React.FC<Props> = ({ openAssociationAccount, openIndividualAccount }) => {
    const { t } = useTranslation('register');

    return (
        <div className={styles.chooseUserType}>
            <h1 className={styles.title}>{t('welcome-to-sadaqa')}</h1>
            <p className={styles.text}>{t('welcome-to-sadaqa-text')}</p>

            <p className={styles.alreadyHaveAccount}>
                {t('already-have-account')} ?{' '}
                <Link className={styles.login} href={'login'}>
                    {t('login')}
                </Link>
            </p>

            <div className={styles.choosingButtons}>
                <h3>{t('choose-account-type')}</h3>

                <div className={styles.chooseButton} onClick={openIndividualAccount}>
                    <LocalIcons.INDIVIDUAL_USER_TYPE />
                    <p>{t('individual-account')}</p>
                </div>

                <div className={styles.chooseButton} onClick={openAssociationAccount}>
                    <LocalIcons.ASSOCIATION_USER_TYPE />
                    <p>{t('association-account')}</p>
                </div>
            </div>
        </div>
    );
};

export { ChooseUserType };
