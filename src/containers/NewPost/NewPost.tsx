import React from 'react';
import classNames from 'classnames/bind';

import styles from './NewPost.module.scss';

import PageMetaData from '../../components/common/others/PageMetaData';

import { withAuthRequired } from '../../components/HOC/withAuthRequired';

import { useRightToLeftDetector } from '../../utils/hooks/useRightToLeftDetector';

import { TopHeaders } from './components/TopHeaders';
import { Layout } from '../../components/Layout/Layout';
import { NewPostForm } from './components/NewPostForm/NewPostForm';
import { Container } from '../../components/common/Container/Container';

const cx = classNames.bind(styles);

const NewPost: React.FC = withAuthRequired(() => {
  const { rightToLeft } = useRightToLeftDetector();

  return (
    <Layout>
      <PageMetaData title={'Sadaqa صدقة | New Advertisement'} />

      <Container className={styles.container}>
        <div className={cx('content', { rightToLeft })}>
          <TopHeaders />
          <NewPostForm />
        </div>
      </Container>
    </Layout>
  );
});

export { NewPost };
