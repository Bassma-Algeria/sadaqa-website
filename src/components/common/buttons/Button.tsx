import React from 'react';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

interface Props {
  variant: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const Button: React.FC<Props> = ({ size = 'md', ...props }) => {
  const className = cx('button', size, props.variant, {
    disabled: props.disabled,
    fullWidth: props.fullWidth,
  });

  return (
    <button
      className={`${className} ${props.className}`}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
