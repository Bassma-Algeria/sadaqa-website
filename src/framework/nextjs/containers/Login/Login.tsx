import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';

import styles from './Login.module.scss';
import { LocalImages } from '../../utils/constants/LocalImages';

import { Image } from '../../components/Image/Image';
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
                        />
                        <PasswordInput
                            name={'password'}
                            value={email}
                            onChange={setEmail}
                            label={t('password')}
                            placeholder={t('enter-your-password')}
                            containerClassName={styles.input}
                        />
                    </form>
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
