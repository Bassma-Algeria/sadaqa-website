import React from 'react';
import Slider from 'react-slick';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../../Home.module.scss';

import { heroSliderSettings } from './utils/slideSettings';
import { IMAGES } from '../../../../utils/constants/Images';

import { useNeedAuthPopup } from '../../../../utils/hooks/Popups/useNeedAuthPopup';

import { Container } from '../../../../components/common/Container/Container';
import { HeroSlide } from './components/HeroSlide';

const Hero: React.FC = () => {
  const { NeedAuthPopup, openPopup } = useNeedAuthPopup();
  const { t } = useTranslation('home');
  const { locale } = useRouter();

  return (
    <Container className={`${styles.heroContainer} ${styles[locale!]}`}>
      <NeedAuthPopup />

      <Slider {...heroSliderSettings} className="home_slider_container">
        <HeroSlide
          title={t('hero1-title')}
          desc={t('hero1-desc')}
          buttonText={t('hero1-button')}
          actionLink="/create_new_ad"
          image={IMAGES.HERO1}
          openPopup={openPopup}
        />
        <HeroSlide
          title={t('hero2-title')}
          desc={t('hero2-desc')}
          buttonText={t('hero2-button')}
          actionLink="/create_new_ad"
          image={IMAGES.HERO2}
          openPopup={openPopup}
          reverse
        />
        <HeroSlide
          title={t('hero3-title')}
          desc={t('hero3-desc')}
          buttonText={t('hero3-button')}
          actionLink="/people_need_help/donation_request"
          image={IMAGES.HERO3}
          openPopup={openPopup}
        />
      </Slider>
    </Container>
  );
};

export { Hero };
