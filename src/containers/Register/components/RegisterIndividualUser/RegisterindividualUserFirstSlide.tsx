import React from 'react';
import Link from 'next/link';

import styles from '../../Register.module.scss';

import { LocalIcons } from '../../../../utils/constants/LocalIcons';

import { Button } from '../../../../components/Buttons/Button/Button';
import { TextInput } from '../../../../components/Inputs/TextInput/TextInput';
import { useTranslation } from '../../../../utils/hooks/useTranslation';

interface Props {
    goBack: () => void;
}

const RegisterIndividualUserFirstSlide: React.FC<Props> = ({ goBack }) => {
    const { t } = useTranslation('register');

    return (
        <>
            <h1 className={styles.title}>{t('lets-create-your-account')}</h1>
            <p className={styles.text}>{t('individual-account-creation-text')}</p>

            <p className={styles.alreadyHaveAccount}>
                {t('already-have-account')} ?{' '}
                <Link className={styles.login} href={'login'}>
                    {t('login')}
                </Link>
            </p>

            <div className={styles.inputs}>
                <div className={styles.firstLastName}>
                    <TextInput
                        containerClassName={styles.input}
                        placeholder={t('jamal')}
                        value={''}
                        onChange={() => {}}
                        name={'firstName'}
                        label={t('first-name')}
                    />
                    <TextInput
                        containerClassName={styles.input}
                        placeholder={t('boukala')}
                        value={''}
                        onChange={() => {}}
                        name={'lastName'}
                        label={t('last-name')}
                    />
                </div>

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

            <Button onClick={() => {}} variant={'primary'} Icon={LocalIcons.RIGHT_ARROW}>
                {t('next')}
            </Button>
        </>
    );
};

export { RegisterIndividualUserFirstSlide };
