import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import styles from './Register.module.scss';

import { LocalImages } from '../../utils/constants/LocalImages';

import { useTranslation } from '../../utils/hooks/useTranslation';

import { Image } from '../../components/Image/Image';

import { ChooseUserType } from './components/ChooseUserType';
import { RegisterAssociation } from './components/RegisterAssociation/RegisterAssociation';
import { RegisterIndividualUser } from './components/RegisterIndividualUser/RegisterIndividualUser';

const Register: React.FC = () => {
    const { t } = useTranslation('register');

    const [userToRegister, setUserToRegister] = useState<'association' | 'individual'>();

    const router = useRouter();
    const fragment = router.asPath.split('#')[1];

    useEffect(() => {
        if (fragment === 'association') setUserToRegister('association');
        else if (fragment === 'individual') setUserToRegister('individual');
        else setUserToRegister(undefined);
    }, [fragment]);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {!userToRegister && (
                    <ChooseUserType
                        openAssociationAccount={() => router.push('#association#step1')}
                        openIndividualAccount={() => router.push('#individual#step1')}
                    />
                )}
                {userToRegister === 'association' && (
                    <RegisterAssociation goBack={() => router.push('')} />
                )}
                {userToRegister === 'individual' && (
                    <RegisterIndividualUser goBack={() => router.push('')} />
                )}
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
