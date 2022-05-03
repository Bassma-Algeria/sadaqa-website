import React from 'react';
import Link from 'next/link';
import { ReactSVG } from 'react-svg';
import classNames from 'classnames/bind';

import styles from './PostsSuggestionsList.module.scss';

import type { PostType } from '../../../@types/Posts';

import { ICONS } from '../../../utils/constants/Icons';

import { usePostsFetcher } from '../../../utils/hooks/DataFetching/usePostsFetcher';

import { Loading } from './components/Loading';
import { ErrorMessage } from './components/ErrorMessage';
import { PostsList } from './components/PostsList';

const cx = classNames.bind(styles);

interface Props {
  title: string;
  seeMoreLink: string;
  postType: PostType;
  containerClass?: string;
  reverseDirection?: boolean;
}

const PostsSuggestionsList: React.FC<Props> = ({ reverseDirection, ...props }) => {
  const className = cx('container', { reverseDirection });

  return (
    <div className={`${className} ${props.containerClass}`}>
      <Header seeMoreLink={props.seeMoreLink} title={props.title} />
      <Posts postType={props.postType} />
    </div>
  );
};

const Header: React.FC<Pick<Props, 'seeMoreLink' | 'title'>> = props => {
  return (
    <div className={styles.header}>
      <h3>{props.title}</h3>

      <Link href={props.seeMoreLink}>
        <div className={styles.iconContainer}>
          <ReactSVG src={ICONS.RIGHT_ARROW} />
        </div>
      </Link>
    </div>
  );
};

const Posts: React.FC<Pick<Props, 'postType'>> = ({ postType }) => {
  const { posts, refrech, status } = usePostsFetcher({
    postType,
    numOfPostsPerChunk: 2,
    numOfChunk: 1,
  });

  if (status === 'loading') return <Loading />;
  if (status === 'success') return <PostsList posts={posts!} />;

  return <ErrorMessage refrech={refrech} />;
};

export { PostsSuggestionsList };
