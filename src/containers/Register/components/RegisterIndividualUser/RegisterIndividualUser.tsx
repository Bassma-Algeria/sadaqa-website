import React from 'react';

import styles from '../../Register.module.scss';

import { ReturnButton } from '../ReturnButton';
import { RegisterIndividualUserSecondSlide } from './RegisterIndividualUserSecondSlide';

interface Props {
    goBack: () => void;
}

const RegisterIndividualUser: React.FC<Props> = ({ goBack }) => {
    return (
        <div className={styles.registerIndividualUser}>
            <ReturnButton onClick={goBack} />
            {/*<RegisterIndividualUserFirstSlide goBack={() => {}} />*/}
            <RegisterIndividualUserSecondSlide goBack={() => {}} />
        </div>
    );
};

export { RegisterIndividualUser };
