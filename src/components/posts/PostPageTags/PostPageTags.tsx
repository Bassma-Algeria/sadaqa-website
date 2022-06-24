import React, { Fragment } from 'react';
import Link from 'next/link';
import { ReactSVG } from 'react-svg';
import classNames from 'classnames/bind';

import styles from './PostPageTags.module.scss';

import { ICONS } from '../../../utils/constants/Icons';

import { useRightToLeftDetector } from '../../../utils/hooks/useRightToLeftDetector';

const cx = classNames.bind(styles);

interface Props {
  tags: { name: string; pageLink: string }[];
  className?: string;
}

const PostPageTags: React.FC<Props> = ({ className, tags }) => {
  const { rightToLeft } = useRightToLeftDetector();

  return (
    <div className={`${cx('container', { rightToLeft })} ${className}`}>
      {tags.map(({ name, pageLink }) => (
        <Fragment key={pageLink}>
          <Link href={pageLink}>{name}</Link>
          <ReactSVG src={ICONS.RIGHT_ARROW_2} />
        </Fragment>
      ))}
    </div>
  );
};

export { PostPageTags };
