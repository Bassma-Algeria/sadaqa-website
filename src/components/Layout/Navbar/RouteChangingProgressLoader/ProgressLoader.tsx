import React from 'react';
import classNames from 'classnames/bind';

import styles from '../Navbar.module.scss';

const cx = classNames.bind(styles);

interface Props {
  isLoading: boolean;
  isComplete: boolean;
}

const ProgressLoader: React.FC<Props> = ({ isComplete, isLoading }) => {
  return <div className={cx('progressLoader', { isComplete, isLoading })}></div>;
};

export { ProgressLoader };
