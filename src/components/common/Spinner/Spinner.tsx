import React from 'react';

import styles from './Spinner.module.scss';

interface Props {
  containerClass?: string;
  className?: string;
}

const Spinner: React.FC<Props> = ({ className, containerClass }) => {
  return (
    <div className={containerClass}>
      <div className={`${styles.loader} ${className}`}>Loading...</div>
    </div>
  );
};

export { Spinner };
