import React from 'react';
import classNames from 'classnames/bind';

import styles from './BaseInput.module.scss';

import { useRightToLeftDetector } from '../../../utils/hooks/useRightToLeftDetector';

const cx = classNames.bind(styles);

interface Props {
  name: string;
  label: string;
  error?: string;
  className?: string;
}

const BaseInput: React.FC<Props> = ({ children, error, ...props }) => {
  const { rightToLeft } = useRightToLeftDetector();
  const className = cx('container', { error, rightToLeft });

  return (
    <div className={`${className} ${props.className}`}>
      <label htmlFor={props.name}>{props.label}</label>

      <div className={styles.content}>{children}</div>

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export { BaseInput };
