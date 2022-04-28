import React, { useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import classNames from 'classnames/bind';

import styles from './PostsSuggestionsList.module.scss';

// icons
import rightArrowIcon from '../../../../../../public/svg/right_arrow_see_more_icon.svg';

// componenets
import AdCard from '../../../../../components/common/cards/AdCard';
import { SubHeader } from '../../../../../components/common/others/Headers';
import { Spinner } from '../../common/Spinner/Spinner';
import NoAds from '../../../../../components/common/others/NoAds';
import { postsGateway } from '../../../../../Gateways';
import type { IPost } from '../../../@types/Posts';
import { DonationCategory, PostType } from '../../../@types/Posts';
import { usePostsFetcher } from './usePostsFetcher';

const cx = classNames.bind(styles);

interface Props {
  title: string;
  seeMoreLink: string;
  postType: PostType;
  containerClass?: string;
}

const PostsSuggestionsList: React.FC<Props> = ({
  postType,
  seeMoreLink,
  title,
  containerClass,
}) => {
  return (
    <div className={`${styles.container} ${containerClass}`}>
      <div className={styles.header}>
        <h3>{title}</h3>

        <Link href={seeMoreLink}>
          <div className={styles.iconContainer}>
            <ReactSVG src={rightArrowIcon.src} />
          </div>
        </Link>
      </div>

      <Posts />
    </div>
  );
};

const Posts: React.FC = () => {
  const { posts, refrech, status } = usePostsFetcher({
    postType: 'call_for_help',
    numOfPostsPerChunk: 2,
    numOfChunk: 1,
  });

  if (status === 'loading') return <Loading />;
  if (status === 'success') return <PostsList posts={posts!} />;

  return <ErrorMessage refrech={refrech} />;
};

const Loading = () => {
  return <Spinner containerClass={styles.loaderContainer} className={styles.loader} />;
};

const ErrorMessage: React.FC<{ refrech: () => Promise<void> }> = ({ refrech }) => {
  return (
    <p>
      Something went wrong, <button onClick={refrech}>refrech</button>
    </p>
  );
};

const PostsList: React.FC<{ posts: IPost[] }> = ({ posts }) => {
  return !posts.length ? (
    <div style={{ height: 350, width: '100%' }}>
      <NoAds />
    </div>
  ) : (
    <div className={`flex flex-wrap`} style={{ gap: '2%' }}>
      {posts.map(post => {
        return <AdCard key={post.post_id} {...post} subType={'donation_request'} />;
      })}
    </div>
  );
};

export { PostsSuggestionsList };
