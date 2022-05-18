import React from 'react';

import styles from './Avatar.module.scss';

interface Props {
  image: string;
  size?: number;
}

const Avatar: React.FC<Props> = ({ image, size }) => {
  const customStyle = size ? { width: size, height: size } : undefined;

  return (
    <div className={styles.container} style={customStyle}>
      <img src={image} alt="avatar" />
    </div>
  );
};

export { Avatar };
