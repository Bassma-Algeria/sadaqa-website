import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import styles from '../../../Home.module.scss';

import { isCreationAdPage } from '../../../../../utils/homeHelpers';

import { Button } from '../../../../../components/common/Button/Button';

interface Props {
  title: string;
  desc: string;
  buttonText: string;
  actionLink: string;
  image: StaticImageData;
  reverse?: boolean;
  openPopup(): void;
}

const HeroSlide: React.FC<Props> = props => {
  const { isAuthenticated } = useSelector(state => state.authUser);

  const router = useRouter();

  const handleButtonClick = (link: string) => {
    router.prefetch(link);

    if (!isAuthenticated && isCreationAdPage(link)) {
      return props.openPopup();
    }

    router.push(link);
  };

  return (
    <div className={`${styles.heroSlideContainer} ${props.reverse && styles.reverse}`}>
      <div className={styles.content}>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>

        <Button variant="primary" size="lg" onClick={() => handleButtonClick(props.actionLink)}>
          {props.buttonText}
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

export { HeroSlide };
