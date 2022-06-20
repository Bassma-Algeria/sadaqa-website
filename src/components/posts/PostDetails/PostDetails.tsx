import React from 'react';
import Image from 'next/image';
import { ReactSVG } from 'react-svg';
import classNames from 'classnames/bind';
import { Slide } from 'react-slideshow-image';
import { useTranslation } from 'next-i18next';

import 'react-slideshow-image/dist/styles.css';
import styles from './PostDetails.module.scss';

import { useRightToLeftDetector } from '../../../utils/hooks/useRightToLeftDetector';

import { ICONS } from '../../../utils/constants/Icons';
import { IMAGES } from '../../../utils/constants/Images';

const cx = classNames.bind(styles);

export interface Props {
  type: string;
  title: string;
  description: string;
  category: string;
  address: string;
  status: string;
  active: boolean;
  pictures: string[];
  publishingDate: string;
  publisherName: string;
}

const PostDetails: React.FC<Props> = props => {
  const { t } = useTranslation('common');
  const { rightToLeft } = useRightToLeftDetector();

  return (
    <div className={cx('container', { rightToLeft })}>
      <div className={styles.head}>
        <h1>{props.title}</h1>
        <h4>
          {props.status} <span>.</span> {t('publish-date')} : {props.publishingDate}
        </h4>
      </div>

      <div className={styles.pictures}>
        <PostPictures pictures={props.pictures} />
      </div>

      <div className={styles.body}>
        <h1>{t('description')}</h1>
        <p className={styles.desc}>{props.description}</p>

        <PostInfoItem title={t('advertisement-type')} value={props.type} />

        <div className={styles.separator}></div>

        <PostInfoItem title={t('category')} value={props.category} />

        <div className={styles.separator}></div>

        <PostInfoItem title={t('adress')} value={props.address} />

        <div className={styles.separator}></div>

        <PostInfoItem title={t('status')} value={props.status} />

        <div className={styles.separator}></div>

        <PostInfoItem title={t('publish-date')} value={props.publishingDate} />

        <div className={styles.separator}></div>

        <PostInfoItem title={t('publisher')} value={props.publisherName} />
      </div>
    </div>
  );
};

const PostPictures: React.FC<{ pictures: string[] }> = ({ pictures }) => {
  return pictures.length ? (
    <Slide
      autoplay={false}
      transitionDuration={300}
      infinite={false}
      indicators={true}
      nextArrow={NextArrow}
      prevArrow={PrevArrow}
    >
      {pictures.map(url => (
        <div className={styles.imageContainer}>
          <img src={url} draggable={false} alt="post image" />
        </div>
      ))}
    </Slide>
  ) : (
    <div className={styles.imageContainer}>
      <Image src={IMAGES.NO_IMAGE} draggable={false} alt="post image" />
    </div>
  );
};

const NextArrow = (
  <div className={styles.nextArrow}>
    <ReactSVG src={ICONS.RIGHT_ARROW_2} />
  </div>
);

const PrevArrow = (
  <div className={styles.prevArrow}>
    <ReactSVG src={ICONS.RIGHT_ARROW_2} />
  </div>
);

const PostInfoItem: React.FC<{ title: string; value: string }> = ({ title, value }) => {
  return (
    <div className={styles.postInfoItem}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export { PostDetails };
