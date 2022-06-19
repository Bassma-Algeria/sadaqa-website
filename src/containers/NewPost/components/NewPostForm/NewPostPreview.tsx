import React from 'react';

import styles from '../../NewPost.module.scss';

interface Props {
  closePreview: () => void;
}

const NewPostPreview: React.FC<Props> = () => {
  return <div className={styles.postPreview}>{/* <div className={styles.overlay}></div> */}</div>;
};

export { NewPostPreview };
