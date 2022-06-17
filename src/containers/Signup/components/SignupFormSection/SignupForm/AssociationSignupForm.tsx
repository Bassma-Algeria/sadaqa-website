import React from 'react';
import { useTranslation } from 'next-i18next';

import styles from '../../../Signup.module.scss';

import { useAssociationSignupHandler } from './hooks/useAssociationSignupHandler';

import { NameInput } from '../../../../../components/Forms/NameInput';
import { EmailInput } from '../../../../../components/Forms/EmailInput';
import { PicturesInput } from '../../../../../components/Forms/PicturesInput';
import { PhoneNumberInput } from '../../../../../components/Forms/PhoneNumberInput';
import { ConfirmPasswordInput } from '../../../../../components/Forms/ConfirmPasswordInput';
import { ValidatedPasswordInput } from '../../../../../components/Forms/ValidatedPasswordInput';
import { DropDownInput } from '../../../../../components/common/Inputs/DropDownInput/DropDownInput';
import { Button } from '../../../../../components/common/Button/Button';
import { Spinner } from '../../../../../components/common/Spinner/Spinner';

const AssociationSignupForm: React.FC = () => {
  const { t } = useTranslation(['common', 'signup']);

  const { isLoading, handleSubmit, signupValues, setSignupValues, error } =
    useAssociationSignupHandler();

  return (
    <form onSubmit={handleSubmit}>
      <NameInput
        name="associationName"
        label={t('association-name')}
        placeholder={t('association-al-baraka')}
        className={styles.input}
        value={signupValues.associationName}
        onValueChange={associationName => setSignupValues({ ...signupValues, associationName })}
      />
      <DropDownInput
        name="wilaya"
        label={t('wilaya')}
        placeholder={t('tap-to-choose')}
        className={styles.input}
        value={signupValues.wilaya}
        onValueChange={wilaya => setSignupValues({ ...signupValues, wilaya })}
        options={[]}
      />
      <PhoneNumberInput
        className={styles.input}
        value={signupValues.phoneNumber}
        onValueChange={phoneNumber => setSignupValues({ ...signupValues, phoneNumber })}
      />
      <EmailInput
        className={styles.notArabicInput}
        value={signupValues.email}
        onValueChange={email => setSignupValues({ ...signupValues, email })}
      />
      <ValidatedPasswordInput
        className={styles.notArabicInput}
        value={signupValues.password}
        onValueChange={password => setSignupValues({ ...signupValues, password })}
      />
      <ConfirmPasswordInput
        className={styles.notArabicInput}
        password={signupValues.password}
        value={signupValues.confirmPassword}
        onValueChange={confirmPassword => setSignupValues({ ...signupValues, confirmPassword })}
      />
      <PicturesInput
        label={t('provide-legal-association-documents')}
        name="associationDocuments"
        className={styles.input}
        pictures={signupValues.associationDocuments}
        onPicturesChange={associationDocuments =>
          setSignupValues({ ...signupValues, associationDocuments })
        }
      />

      <p className={styles.error}>{error}</p>

      <Button variant="primary" className={styles.signupButton} type="submit" fullWidth>
        {isLoading ? <Spinner color="white" /> : t('submit')}
      </Button>
    </form>
  );
};

export { AssociationSignupForm };
