import React from 'react';
import Link from 'next/link';

import styles from '../../Register.module.scss';

import { LocalIcons } from '../../../../utils/constants/LocalIcons';

import { Button } from '../../../../components/Buttons/Button/Button';
import { TextInput } from '../../../../components/Inputs/TextInput/TextInput';
import { useTranslation } from '../../../../utils/hooks/useTranslation';
import { ReturnButton } from '../ReturnButton';

interface Props {
    goBack: () => void;
    goNext: () => void;
}

const RegisterAssociationFirstStep: React.FC<Props> = ({ goBack, goNext }) => {
    const { t } = useTranslation('register');

    return (
        <>
            <ReturnButton onClick={goBack} />

            <h1 className={styles.title}>{t('lets-create-your-account')}</h1>
            <p className={styles.text}>{t('association-creation-text')}</p>

            <p className={styles.alreadyHaveAccount}>
                {t('already-have-account')} ?{' '}
                <Link className={styles.login} href={'login'}>
                    {t('login')}
                </Link>
            </p>

            <div className={styles.inputs}>
                <TextInput
                    containerClassName={styles.input}
                    placeholder={t('enter-association-name')}
                    value={''}
                    onChange={() => {}}
                    name={'name'}
                    label={t('association-name')}
                />
                <TextInput
                    name={'email'}
                    value={''}
                    onChange={() => {}}
                    label={t('email')}
                    placeholder={t('enter-your-email')}
                    containerClassName={styles.input}
                />
                <TextInput
                    name={'phoneNumber'}
                    value={''}
                    onChange={() => {}}
                    label={t('phone-number')}
                    placeholder={t('enter-your-phone-number')}
                    containerClassName={styles.input}
                />
            </div>

            <Button onClick={goNext} variant={'primary'} Icon={LocalIcons.RIGHT_ARROW}>
                {t('next')}
            </Button>
        </>
    );
};

export { RegisterAssociationFirstStep };
