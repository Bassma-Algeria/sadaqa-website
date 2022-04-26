import React from 'react';
import classNames from 'classnames/bind';

import styles from './Title.module.scss';

const cx = classNames.bind(styles);

interface Props {
  variant: 'big' | 'small';
  title: string;
  className?: string;
  align?: 'left' | 'right' | 'center';
}

const Title: React.FC<Props> = ({ title, variant, align = 'left', className = '' }) => {
  const defaultClass = cx('header', variant, align);

  return <h1 className={`${defaultClass} ${className}`}>{title}</h1>;
};

export { Title };
