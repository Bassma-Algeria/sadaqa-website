import React from 'react';

import styles from './Container.module.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Container: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      {children}
    </div>
  );
};

export { Container };
