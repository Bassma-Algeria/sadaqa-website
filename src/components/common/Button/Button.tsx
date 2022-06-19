import React from 'react';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

interface Props {
  variant: 'primary' | 'secondary' | 'greyFilled' | 'greyOutline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  height?: string;
}

const Button: React.FC<Props> = ({ size = 'md', height, ...props }) => {
  const className = cx('button', size, props.variant, {
    disabled: props.disabled,
    fullWidth: props.fullWidth,
  });

  return (
    <button
      className={`${className} ${props.className}`}
      disabled={props.disabled}
      onClick={props.onClick}
      type={props.type}
      style={{ height }}
    >
      {props.children}
    </button>
  );
};

export { Button };
