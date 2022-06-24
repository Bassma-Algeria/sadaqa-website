import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Pagination.module.scss';

import { useRightToLeftDetector } from '../../../utils/hooks/useRightToLeftDetector';

import { Button } from '../../common/Button/Button';
import { useTranslation } from 'next-i18next';

const cx = classNames.bind(styles);

interface Props {
  numberOfPages: number;
  onChange: (pageNumber: number) => void;
  className?: string;
}

const Pagination: React.FC<Props> = ({ className, numberOfPages, onChange }) => {
  const { t } = useTranslation('common');
  const { rightToLeft } = useRightToLeftDetector();
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (pageNumber: number) => {
    onChange(pageNumber);
    setCurrentPage(pageNumber);
  };

  return (
    <div className={className}>
      <div className={cx('container', { rightToLeft })}>
        <Button
          size="sm"
          variant="secondary"
          disabled={currentPage === 1}
          onClick={() => handleChange(currentPage - 1)}
        >
          {t('back')}
        </Button>
        <button>{currentPage}</button>
        ....
        <button>{numberOfPages}</button>
        <Button
          size="sm"
          variant="primary"
          disabled={currentPage === numberOfPages}
          onClick={() => handleChange(currentPage + 1)}
        >
          {t('next')}
        </Button>
      </div>
    </div>
  );
};

export { Pagination };
