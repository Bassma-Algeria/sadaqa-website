import React from 'react';
import Slider from 'react-slick';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../../Home.module.scss';

import { heroSliderSettings } from './utils/slideSettings';

import { useNeedAuthPopup } from '../../../../utils/hooks/Popups/useNeedAuthPopup';

import { IMAGES } from '../../../../utils/constants/Images';

import { HeroSlide } from './components/HeroSlide';

import { Container } from '../../../../components/common/Container/Container';

const Hero: React.FC = () => {
  const { locale } = useRouter();
  const { t } = useTranslation('home');
  const { NeedAuthPopup, openPopup } = useNeedAuthPopup();

  return (
    <Container className={`${styles.heroContainer} ${styles[locale!]}`}>
      <NeedAuthPopup />
      <Slider {...heroSliderSettings} className="home_slider_container">
        <HeroSlide
          variant="imageRightTextLeft"
          title={t('hero1-title')}
          description={t('hero1-desc')}
          actionButtonText={t('hero1-button')}
          actionButtonLinkTo={'/donate'}
          image={IMAGES.HERO1}
          openNeedAuthPopup={openPopup}
          directionReversed={locale === 'ar'}
        />
        <HeroSlide
          variant="imageLeftTextRight"
          title={t('hero2-title')}
          description={t('hero2-desc')}
          actionButtonText={t('hero2-button')}
          actionButtonLinkTo={'/donate'}
          image={IMAGES.HERO2}
          openNeedAuthPopup={openPopup}
          directionReversed={locale === 'ar'}
        />
        <HeroSlide
          variant="imageRightTextLeft"
          title={t('hero3-title')}
          description={t('hero3-desc')}
          actionButtonText={t('hero3-button')}
          actionButtonLinkTo={'/people_need_help/donation_requests'}
          image={IMAGES.HERO3}
          openNeedAuthPopup={openPopup}
          directionReversed={locale === 'ar'}
        />
      </Slider>
    </Container>
  );
};

export { Hero };
