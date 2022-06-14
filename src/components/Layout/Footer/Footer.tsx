import React from 'react';
import Link from 'next/link';
import { ReactSVG } from 'react-svg';
import classNames from 'classnames/bind';
import { useTranslation } from 'next-i18next';

import styles from './Footer.module.scss';

import { ICONS } from '../../../utils/constants/Icons';
import { DONATIONS_CATEGORIES } from '../../../utils/constants/DonationsCategories';
import { PEOPLE_NEED_HELP_CATEGORIES } from '../../../utils/constants/PeopleNeedHelpCategories';

import { useRightToLeftDetector } from '../../../utils/hooks/useRightToLeftDetector';

const cx = classNames.bind(styles);

const Footer: React.FC = () => {
  const { t } = useTranslation('common');
  const { rightToLeft } = useRightToLeftDetector();

  return (
    <div className={cx('footer', { rightToLeft })}>
      <div className={styles.container}>
        <section>
          <h3>{t('donations')}</h3>

          <div className={styles.sectionContent}>
            {DONATIONS_CATEGORIES.map(category => (
              <Link href={category.pageLink} key={category.nameKey}>
                <p className={styles.link}>{t(category.nameKey)}</p>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h3>{t('people-need-help')}</h3>

          <div className={styles.sectionContent}>
            {PEOPLE_NEED_HELP_CATEGORIES.map(category => (
              <Link href={category.pageLink} key={category.nameKey}>
                <p className={styles.link}>{t(category.nameKey)}</p>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h3>{t('about-sadaqa')}</h3>

          <div className={styles.sectionContent}>
            <div>
              <Link href="/faq">{t('faq')}</Link>
              <Link href="/term-of-use">{t('term-of-use')}</Link>
              <Link href="/contact-us">{t('contact-us')}</Link>

              <div className={styles.socialLink}>
                <ReactSVG src={ICONS.EMAIL} />
                <p>sadaqa.contact@gmail.com</p>
              </div>

              <a href="facebook.com" target="_blank" className={styles.socialLink} rel="noreferrer">
                <ReactSVG src={ICONS.FACEBOOK} />
                <p>Bassma</p>
              </a>

              <a
                href="https://www.instagram.com/bassma.algeria/"
                target="_blank"
                className={styles.socialLink}
                rel="noreferrer"
              >
                <ReactSVG src={ICONS.INSTAGRAM} />
                <p>Bassma</p>
              </a>

              <a href="twitter.com" target="_blank" className={styles.socialLink} rel="noreferrer">
                <ReactSVG src={ICONS.TWITTER} />
                <p>Bassma</p>
              </a>
            </div>
          </div>
        </section>
      </div>

      <p className={styles.copyRight}>
        {t('copyright-bassma')} ©{new Date().getFullYear()} {t('all-rights-reserved')} |{' '}
        {t('made-with')}
        <ReactSVG src={ICONS.HEART} />
        {t('by')}
        <a href="https://www.instagram.com/bassma.algeria/" target="_blank" rel="noreferrer">
          {t('bassma-team')}
        </a>
      </p>
    </div>
  );
};

export { Footer };
