import React from 'react';
import Link from 'next/link';

import styles from '../../Register.module.scss';

import { useTranslation } from '../../../../utils/hooks/useTranslation';

import { Button } from '../../../../components/Buttons/Button/Button';
import { TextInput } from '../../../../components/Inputs/TextInput/TextInput';
import { PasswordInput } from '../../../../components/Inputs/PasswordInput/PasswordInput';

interface Props {
    goBack: () => void;
}

const RegisterIndividualUserSecondSlide: React.FC<Props> = ({ goBack }) => {
    const { t } = useTranslation('register');

    return (
        <>
            <h1 className={styles.title}>{t('we-are-almost-done')}</h1>
            <p className={styles.text}>{t('we-are-almost-done-text')}</p>

            <p className={styles.alreadyHaveAccount}>
                {t('already-have-account')} ?{' '}
                <Link className={styles.login} href={'login'}>
                    {t('login')}
                </Link>
            </p>

            <div className={styles.inputs}>
                <TextInput
                    containerClassName={styles.input}
                    placeholder={t('choose-your-wilaya')}
                    value={''}
                    onChange={() => {}}
                    name={'wilaya'}
                    label={t('wilaya')}
                />
                <PasswordInput
                    name={'password'}
                    value={''}
                    onChange={() => {}}
                    label={t('password')}
                    containerClassName={styles.input}
                />
                <PasswordInput
                    name={'confirmPassword'}
                    value={''}
                    onChange={() => {}}
                    label={t('confirm-password')}
                    containerClassName={styles.input}
                />
            </div>

            <Button onClick={() => {}} variant={'primary'}>
                {t('create-account')}
            </Button>
        </>
    );
};

export { RegisterIndividualUserSecondSlide };
