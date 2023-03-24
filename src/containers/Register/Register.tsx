import React from 'react';

import styles from './Register.module.scss';

import { LocalImages } from '../../utils/constants/LocalImages';

import { useTranslation } from '../../utils/hooks/useTranslation';

import { Image } from '../../components/Image/Image';
import { RegisterIndividualUser } from './components/RegisterIndividualUser/RegisterIndividualUser';

const Register: React.FC = () => {
    const { t } = useTranslation('register');

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {/*<ChooseUserType*/}
                {/*    openAssociationAccount={() => {}}*/}
                {/*    openIndividualAccount={() => {}}*/}
                {/*/>*/}
                <RegisterIndividualUser goBack={() => {}} />
            </div>

            <Image
                containerClassName={styles.banner}
                placeholder={'blur'}
                src={LocalImages.REGISTRATION_BANNER}
                objectFit={'cover'}
                alt={t('donation-box')}
            />
        </div>
    );
};

export { Register };
