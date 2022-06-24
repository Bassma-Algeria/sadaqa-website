import React from 'react';
import classNames from 'classnames/bind';

import styles from './Title.module.scss';

const cx = classNames.bind(styles);

interface Props {
  variant: 'big' | 'small';
  className?: string;
  align?: 'left' | 'right' | 'center';
}

const Title: React.FC<Props> = ({ children, variant, align, className = '' }) => {
  const defaultClass = cx('header', variant, align);

  return <h1 className={`${defaultClass} ${className}`}>{children}</h1>;
};

export { Title };
