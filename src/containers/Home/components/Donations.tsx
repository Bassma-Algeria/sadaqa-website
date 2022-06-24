import React from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'next-i18next';

import styles from '../Home.module.scss';

import { useRightToLeftDetector } from '../../../utils/hooks/useRightToLeftDetector';

import { Title } from '../../../components/common/Title/Title';
import { ClothsSuggestions } from '../../../components/Posts/DonationsSuggestions/ClothsSuggestions';
import { FoodSuggestions } from '../../../components/Posts/DonationsSuggestions/FoodSuggestions';
import { ServicesSuggestions } from '../../../components/Posts/DonationsSuggestions/ServicesSuggestions';
import { ElectronicsSuggestions } from '../../../components/Posts/DonationsSuggestions/ElectronicsSuggestions';
import { FurnituresSuggestions } from '../../../components/Posts/DonationsSuggestions/FunituresSuggestions';
import { BooksSuggestions } from '../../../components/Posts/DonationsSuggestions/BooksSuggestions';
import { SportsSuggestions } from '../../../components/Posts/DonationsSuggestions/SportsSuggestions';
import { CosmeticsSuggestions } from '../../../components/Posts/DonationsSuggestions/CosmeticsSuggestions';
import { AnimalsAccessoriesSuggestions } from '../../../components/Posts/DonationsSuggestions/AnimalsAccesoriesSuggestion';
import { ToysSuggestions } from '../../../components/Posts/DonationsSuggestions/ToysSuggestions';
import { ToolsSuggestions } from '../../../components/Posts/DonationsSuggestions/ToolsSuggestions';
import { MedicinesSuggestions } from '../../../components/Posts/DonationsSuggestions/MedicinesSuggestions';
import { CarsAccessoriesSuggestions } from '../../../components/Posts/DonationsSuggestions/CarsAccessoriesSuggestions';
import { OthersSuggestions } from '../../../components/Posts/DonationsSuggestions/OthersSuggestions';

const cx = classNames.bind(styles);

interface Props {}

const Donations: React.FC<Props> = () => {
  const { t } = useTranslation('common');
  const { rightToLeft } = useRightToLeftDetector();

  return (
    <div className={cx('postsSection', { rightToLeft })}>
      <Title variant="big" className={styles.title}>
        {t('donations')}
      </Title>

      <ClothsSuggestions />
      <FoodSuggestions />
      <ServicesSuggestions />
      <ElectronicsSuggestions />
      <FurnituresSuggestions />
      <BooksSuggestions />
      <SportsSuggestions />
      <CosmeticsSuggestions />
      <AnimalsAccessoriesSuggestions />
      <ToysSuggestions />
      <ToolsSuggestions />
      <MedicinesSuggestions />
      <CarsAccessoriesSuggestions />
      <OthersSuggestions />
    </div>
  );
};

export { Donations };
