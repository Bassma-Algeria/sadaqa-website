import React from 'react';

import styles from '../../Register.module.scss';

import { RegisterIndividualUserFirstSlide } from './RegisterindividualUserFirstSlide';

interface Props {
    goBack: () => void;
}

const RegisterIndividualUser: React.FC<Props> = ({ goBack }) => {
    return (
        <div className={styles.registerIndividualUser}>
            <RegisterIndividualUserFirstSlide goBack={() => {}} />
            {/*<RegisterIndividualUserSecondSlide goBack={() => {}} />*/}
        </div>
    );
};

export { RegisterIndividualUser };
