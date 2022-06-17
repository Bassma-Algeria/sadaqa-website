import React from 'react';
import classNames from 'classnames/bind';

import styles from './BaseInput.module.scss';

import { useRightToLeftDetector } from '../../../utils/hooks/useRightToLeftDetector';
import { Label } from './common/Label/Label';

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
      <Label for={props.name}>{props.label}</Label>

      <div className={styles.content}>{children}</div>

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export { BaseInput };
