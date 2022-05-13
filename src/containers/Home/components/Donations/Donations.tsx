import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import styles from '../../Home.module.scss';

import { Title } from '../../../../components/common/Title/Title';

import { Clothes } from './components/Clothes';
import { Food } from './components/Food';
import { Services } from './components/Services';
import { Electronics } from './components/Electronics';
import { Furnitures } from './components/Funitures';
import { Books } from './components/Books';
import { Sports } from './components/Sports';
import { Cosmetics } from './components/Cosmetics';
import { AnimalsAccessories } from './components/AnimalsAccesories';
import { Toys } from './components/Toys';
import { Tools } from './components/Tools';
import { Medicines } from './components/Medicines';
import { CarsAccessories } from './components/CarsAccessories';
import { Others } from './components/Others';

interface Props {}

const Donations: React.FC<Props> = () => {
  const { t } = useTranslation('common');
  const { locale } = useRouter();

  return (
    <div className={`${styles.postsSection} ${styles[locale!]}`}>
      <Title title={t('donations')} variant="big" className={styles.title} />

      <Clothes />
      <Food />
      <Services />
      <Electronics />
      <Furnitures />
      <Books />
      <Sports />
      <Cosmetics />
      <AnimalsAccessories />
      <Toys />
      <Tools />
      <Medicines />
      <CarsAccessories />
      <Others />
    </div>
  );
};

export { Donations };
