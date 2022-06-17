import React from 'react';

import styles from './Label.module.scss';

interface Props {
  for: string;
}

const Label: React.FC<Props> = props => {
  return (
    <label htmlFor={props.for} className={styles.label}>
      {props.children}
    </label>
  );
};

export { Label };
