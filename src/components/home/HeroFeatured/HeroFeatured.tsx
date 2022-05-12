import React from 'react';
import Image from 'next/image';
import classNames from 'classnames/bind';

import styles from './HeroFeatured.module.scss';

import { Button } from '../../common/Button/Button';

const cx = classNames.bind(styles);

interface Props {
  title: string;
  description: string;
  image: StaticImageData;
  actionButtonText: string;
  actionButtonOnClick: () => void;
  variant: 'imageLeftTextRight' | 'imageRightTextLeft';
  directionReversed?: boolean;
}

const HeroFeatured: React.FC<Props> = ({ variant, directionReversed, ...props }) => {
  const className = cx('container', variant, { directionReversed });
  return (
    <div className={className}>
      <div className={styles.content}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>

        <Button variant="primary" size="lg" onClick={props.actionButtonOnClick}>
          {props.actionButtonText}
        </Button>
      </div>

      <div className={styles.image}>
        <div className={styles.imgContainer}>
          <Image placeholder="blur" src={props.image} alt={'Hero Pic'} priority />
        </div>
      </div>
    </div>
  );
};

export { HeroFeatured };
