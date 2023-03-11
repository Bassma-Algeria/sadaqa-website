import React, { useState } from 'react';
import Link from 'next/link';

import styles from './Login.module.scss';

import { LocalImages } from '../../utils/constants/LocalImages';

import { useTranslation } from '../../utils/hooks/useTranslation';

import { Image } from '../../components/Image/Image';
import { Button } from '../../components/Buttons/Button/Button';
import { TextInput } from '../../components/Inputs/TextInput/TextInput';
import { PasswordInput } from '../../components/Inputs/PasswordInput/PasswordInput';

const Login: React.FC = () => {
    const { t } = useTranslation('login');

    const [email, setEmail] = useState('');

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div>
                    <h1 className={styles.title}>{t('welcome-back')}</h1>
                    <p className={styles.text}>{t('welcome-back-text')}</p>

                    <form className={styles.form}>
                        <TextInput
                            name={'email'}
                            value={email}
                            onChange={setEmail}
                            label={t('email')}
                            placeholder={t('enter-your-email')}
                            containerClassName={styles.input}
                            // error={'email is required'}
                        />
                        <PasswordInput
                            name={'password'}
                            value={email}
                            onChange={setEmail}
                            label={t('password')}
                            containerClassName={styles.input}
                        />
                        <Button onClick={() => {}} variant={'primary'}>
                            {t('login')}
                        </Button>
                    </form>

                    <p className={styles.notHaveAccount}>
                        {t('does-not-have-an-account')} ?{' '}
                        <Link className={styles.signup} href={'register'}>
                            {t('signup')}
                        </Link>
                    </p>
                </div>
            </div>

            <Image
                containerClassName={styles.banner}
                placeholder={'blur'}
                src={LocalImages.LOGIN_BANNER}
                objectFit={'cover'}
                alt={t('girl-holding-cloths')}
            />
        </div>
    );
};

export { Login };
