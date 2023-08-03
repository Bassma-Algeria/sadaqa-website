import React from 'react';
import Link from 'next/link';

import styles from '../../Register.module.scss';

import { useTranslation } from '../../../../utils/hooks/useTranslation';

import { Button } from '../../../../components/Buttons/Button/Button';
import { PasswordInput } from '../../../../components/Inputs/PasswordInput/PasswordInput';
import { DropdownInput } from '../../../../components/Inputs/DropdownInput/DropdownInput';
import { ReturnButton } from '../ReturnButton';

interface Props {
    goBack: () => void;
}

const RegisterIndividualUserSecondStep: React.FC<Props> = ({ goBack }) => {
    const { t } = useTranslation('register');

    const [value, setValue] = React.useState<string>('');

    return (
        <>
            <ReturnButton onClick={goBack} />

            <h1 className={styles.title}>{t('we-are-almost-done')}</h1>
            <p className={styles.text}>{t('we-are-almost-done-text')}</p>

            <p className={styles.alreadyHaveAccount}>
                {t('already-have-account')} ?{' '}
                <Link className={styles.login} href={'login'}>
                    {t('login')}
                </Link>
            </p>

            <div className={styles.inputs}>
                <DropdownInput
                    containerClassName={styles.input}
                    placeholder={t('choose-your-wilaya')}
                    value={value}
                    options={[
                        { value: '1', label: '1' },
                        { value: '2', label: '2' },
                    ]}
                    onChange={setValue}
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

            <Button onClick={() => {}} type={'submit'} variant={'primary'}>
                {t('create-account')}
            </Button>
        </>
    );
};

export { RegisterIndividualUserSecondStep };
