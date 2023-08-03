import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import styles from '../../Register.module.scss';

import { ReturnButton } from '../ReturnButton';
import { RegisterAssociationFirstStep } from './RegisterAssociationFirstStep';
import { RegisterAssociationSecondStep } from './RegisterAssociationSecondStep';
import { RegisterAssociationThirdStep } from './RegisterAssociationThirdStep';

interface Props {
    goBack: () => void;
}

const RegisterAssociation: React.FC<Props> = ({ goBack }) => {
    const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);

    const router = useRouter();
    const fragment = router.asPath.split('#')[2];

    useEffect(() => {
        if (fragment === 'step1') setCurrentStep(1);
        if (fragment === 'step2') setCurrentStep(2);
        if (fragment === 'step3') setCurrentStep(3);
    }, [fragment]);

    return (
        <div className={styles.registerAssociation}>
            {currentStep === 1 && (
                <RegisterAssociationFirstStep
                    goBack={goBack}
                    goNext={() => router.push('#association#step2')}
                />
            )}

            {currentStep === 2 && (
                <RegisterAssociationSecondStep
                    goBack={() => router.push('#association#step1')}
                    goNext={() => router.push('#association#step3')}
                />
            )}

            {currentStep === 3 && (
                <RegisterAssociationThirdStep goBack={() => router.push('#association#step2')} />
            )}
        </div>
    );
};

export { RegisterAssociation };
