import React from 'react';
import classNames from 'classnames/bind';

import styles from './BaseInput.module.scss';

import { useLocaleDetector } from '../../../utils/hooks/useLocaleDetecter';

const cx = classNames.bind(styles);

interface Props {
  name: string;
  label: string;
  error?: string;
  className?: string;
}

const BaseInput: React.FC<Props> = ({ children, label, name, className: customClass, error }) => {
  const locale = useLocaleDetector();

  const className = cx('container', locale, { error });

  return (
    <div className={`${className} ${customClass}`}>
      <label htmlFor={name}>{label}</label>

      <div className={styles.content}>{children}</div>

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export { BaseInput };
