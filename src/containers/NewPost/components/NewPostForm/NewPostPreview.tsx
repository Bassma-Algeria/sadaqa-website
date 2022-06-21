import React from 'react';

import styles from '../../NewPost.module.scss';

import { Container } from '../../../../components/common/Container/Container';
import { PostDetailsWithPublisherCard } from '../../../../components/Posts/PostDetailsWithPublisherCard/PostDetailsWithPublisherCard';

interface Props {
  closePreview: () => void;
}

const NewPostPreview: React.FC<Props> = ({ closePreview }) => {
  return (
    <div className={styles.postPreview}>
      <div className={styles.overlay} onClick={closePreview}></div>

      <div className={styles.previewContainer}>
        <Container>
          <PostDetailsWithPublisherCard postDetails={{ pictures: [] }} publisherDetails={{}} />
        </Container>
      </div>
    </div>
  );
};

export { NewPostPreview };
