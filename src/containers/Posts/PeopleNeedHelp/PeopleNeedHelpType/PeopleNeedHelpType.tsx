import React from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';
import { useTranslation } from 'next-i18next';

import styles from '../../Posts.module.scss';

import { PostType } from '../../../../@types/Posts';
import { Post } from '../../../../core/CoreGateways/PostsGateway/PostsGateway.types';

import { NUM_OF_POSTS_PER_PAGE } from '../../utils/constants';

import { useRightToLeftDetector } from '../../../../utils/hooks/useRightToLeftDetector';

import PageMetaData from '../../../../components/common/others/PageMetaData';

import { Layout } from '../../../../components/Layout/Layout';
import { Title } from '../../../../components/common/Title/Title';
import { PostCard } from '../../../../components/Posts/PostCard/PostCard';
import { Pagination } from '../../../../components/Posts/Pagination/Pagination';
import { PostPageTags } from '../../../../components/Posts/PostPageTags/PostPageTags';

const cx = classNames.bind(styles);

interface Props {
  type: PostType;
  posts: Post[];
  totalNumberOfPosts: number;
}

const PeopleNeedHelpType: React.FC<Props> = ({ type, posts, totalNumberOfPosts }) => {
  const { asPath } = useRouter();
  const { t } = useTranslation('common');
  const { rightToLeft } = useRightToLeftDetector();

  return (
    <Layout withFooter withSidebar withContainer>
      <PageMetaData title={'Sadaqa صدقة | People Need Help'} />

      <div className={cx('container', { rightToLeft })}>
        <PostPageTags
          tags={[
            { name: t('people-need-help'), pageLink: '/people-need-help' },
            { name: t(type), pageLink: asPath },
          ]}
        />

        <Title variant="big" className={styles.title}>
          {t(type)}
        </Title>

        <div className={styles.postsContainer}>
          {posts.map(post => (
            <PostCard {...post} key={post.postId} />
          ))}
        </div>

        <Pagination
          className={styles.pagination}
          numberOfPages={Math.ceil(totalNumberOfPosts / NUM_OF_POSTS_PER_PAGE)}
          onChange={pageNumber => console.log(pageNumber)}
        />
      </div>
    </Layout>
  );
};

export { PeopleNeedHelpType };
