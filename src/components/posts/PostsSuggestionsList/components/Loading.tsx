import React from 'react';

import styles from '../PostsSuggestionsList.module.scss';

import { Spinner } from '../../../common/Spinner/Spinner';

const Loading: React.FC = () => {
  return <Spinner containerClass={styles.loaderContainer} className={styles.loader} />;
};

export { Loading };
