import React from 'react';
import Link from 'next/link';
import { ReactSVG } from 'react-svg';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';

import styles from './PostsSuggestionsList.module.scss';

import type { DonationCategory, PostType } from '../../../@types/Posts';

import { ICONS } from '../../../utils/constants/Icons';

import { usePostsFetcher } from '../../../utils/hooks/DataFetching/usePostsFetcher';

import { Loading } from './components/Loading';
import { ErrorMessage } from './components/ErrorMessage';
import { PostsList } from './components/PostsList';
import { Title } from '../../common/Title/Title';

const cx = classNames.bind(styles);

interface Props {
  title: string;
  seeMoreLink: string;
  postType: PostType;
  numOfPosts: number;
  category?: DonationCategory;
  containerClass?: string;
}

const PostsSuggestionsList: React.FC<Props> = props => {
  const router = useRouter();
  const reverseDirection = router.locale === 'ar';
  const className = cx('container', { reverseDirection });

  return (
    <div className={`${className} ${props.containerClass}`}>
      <Header seeMoreLink={props.seeMoreLink} title={props.title} />
      <Posts category={props.category} numOfPosts={props.numOfPosts} postType={props.postType} />
    </div>
  );
};

const Header: React.FC<Pick<Props, 'seeMoreLink' | 'title'>> = props => {
  return (
    <div className={styles.header}>
      <Title title={props.title} variant="small" />

      <Link href={props.seeMoreLink}>
        <div className={styles.iconContainer}>
          <ReactSVG src={ICONS.RIGHT_ARROW} />
        </div>
      </Link>
    </div>
  );
};

const Posts: React.FC<Pick<Props, 'postType' | 'numOfPosts' | 'category'>> = props => {
  const { postType, numOfPosts: numOfPostsPerChunk, category } = props;
  const { posts, refrech, status } = usePostsFetcher({
    postType,
    numOfPostsPerChunk,
    category,
    numOfChunk: 1,
  });

  if (status === 'loading') return <Loading />;
  if (status === 'success') return <PostsList posts={posts!} />;

  return <ErrorMessage refrech={refrech} />;
};

export { PostsSuggestionsList };
