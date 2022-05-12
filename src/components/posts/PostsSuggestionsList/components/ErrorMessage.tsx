import { useTranslation } from 'next-i18next';
import React from 'react';

import styles from '../PostsSuggestionsList.module.scss';

import { FetchingDataError } from '../../../common/FetchingDataError/FetchingDataError';

interface Props {
  refrech: () => Promise<void>;
}

const ErrorMessage: React.FC<Props> = ({ refrech }) => {
  const { t } = useTranslation();

  return (
    <FetchingDataError
      containerClass={styles.errorMessageContainer}
      errorMessage={t('something-went-wrong')}
      refrech={refrech}
      refrechMessage={t('try-again')}
    />
  );
};

export { ErrorMessage };
