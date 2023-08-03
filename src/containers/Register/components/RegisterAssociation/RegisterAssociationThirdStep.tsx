import React, { use, useState } from 'react';

import styles from '../../Register.module.scss';

import { useTranslation } from '../../../../utils/hooks/useTranslation';

import { Button } from '../../../../components/Buttons/Button/Button';
import { FileInput } from '../../../../components/Inputs/FileInput/FileInput';

import { ReturnButton } from '../ReturnButton';
import { CheckboxInput } from '../../../../components/Inputs/CheckboxInput/CheckboxInput';
import Link from 'next/link';

interface Props {
    goBack: () => void;
}

const RegisterAssociationThirdStep: React.FC<Props> = ({ goBack }) => {
    const { t } = useTranslation('register');

    const [files, setFiles] = useState<boolean>(false);

    return (
        <>
            <ReturnButton onClick={goBack} />

            <h1 className={styles.title}>{t('association-legal-documents')}</h1>
            <p className={styles.text}>{t('enter-association-logal-documents-text')}</p>

            <div className={styles.inputs}>
                <FileInput
                    containerStyle={styles.input}
                    value={[]}
                    onChange={files => {
                        console.log(files);
                    }}
                />
                <CheckboxInput
                    value={files}
                    onChange={v => setFiles(v)}
                    containerStyle={styles.privacyPolicyCheckbox}
                    label={
                        <p className={styles.privacyPolicyText}>
                            {t('you-are-okay-with-our')}{' '}
                            <Link href={'/term-of-use'} target="_blank">
                                {t('term-of-use')}
                            </Link>
                            ,{' '}
                            <Link href={'/privacy-policy'} target="_blank">
                                {t('privacy-policy')}
                            </Link>
                        </p>
                    }
                />
            </div>

            <Button onClick={() => {}} type={'submit'} variant={'primary'}>
                {t('create-account')}
            </Button>
        </>
    );
};

export { RegisterAssociationThirdStep };
