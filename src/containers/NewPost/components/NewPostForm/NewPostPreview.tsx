import React from 'react';

import styles from '../../NewPost.module.scss';

import { AuthUserCard } from '../../../../components/Users/AuthUserCard';
import { Container } from '../../../../components/common/Container/Container';
import { PostDetails } from '../../../../components/Posts/PostDetails/PostDetails';

interface Props {
  closePreview: () => void;
}

const NewPostPreview: React.FC<Props> = ({ closePreview }) => {
  return (
    <div className={styles.postPreview}>
      <div className={styles.overlay} onClick={closePreview}></div>

      <div className={styles.previewContainer}>
        <Container>
          <div className={styles.topContainer}>
            <PostDetails pictures={[]} />
            <AuthUserCard />
          </div>
        </Container>
      </div>
    </div>
  );
};

export { NewPostPreview };
