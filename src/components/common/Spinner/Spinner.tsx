import React from 'react';

import styles from './Spinner.module.scss';

interface Props {
  containerClass?: string;
  className?: string;
  color?: string;
}

const Spinner: React.FC<Props> = ({ className, containerClass, color = '#000' }) => {
  return (
    <div className={`${styles.container} ${containerClass}`} style={{ color }}>
      <div className={`${styles.loader} ${className}`}>Loading...</div>
    </div>
  );
};

export { Spinner };
