import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import styles from '../../Register.module.scss';

import { RegisterIndividualUserFirstStep } from './RegisterIndividualUserFirstStep';
import { RegisterIndividualUserSecondStep } from './RegisterIndividualUserSecondStep';

interface Props {
    goBack: () => void;
}

const RegisterIndividualUser: React.FC<Props> = ({ goBack }) => {
    const [currentStep, setCurrentStep] = useState<1 | 2>(1);

    const router = useRouter();
    const fragment = router.asPath.split('#')[2];

    useEffect(() => {
        if (fragment === 'step1') setCurrentStep(1);
        if (fragment === 'step2') setCurrentStep(2);
    }, [fragment]);

    return (
        <div className={styles.registerIndividualUser}>
            {currentStep === 1 && (
                <RegisterIndividualUserFirstStep
                    goBack={goBack}
                    goNext={() => router.push('#individual#step2')}
                />
            )}

            {currentStep === 2 && (
                <RegisterIndividualUserSecondStep goBack={() => router.push('#individual#step1')} />
            )}
        </div>
    );
};

export { RegisterIndividualUser };
