import React, { useRef } from 'react';
import { ReactSVG } from 'react-svg';
import { useTranslation } from 'next-i18next';

import styles from './SharePostPopup.module.scss';

import type { PopupProps } from '../PopupProps';

import { ICONS } from '../../../utils/constants/Icons';

import { postsGateway } from '../../../Gateways';

import { BasePopup } from '../../common/BasePopup/BasePopup';

interface Props extends PopupProps {
  postId: number;
}

const SharePostPopup: React.FC<Props> = ({ closePopup, postId }) => {
  const postLink = `${location.host}/posts/${postId}`;

  const postLinkRef = useRef<HTMLParagraphElement>(null);
  const { t } = useTranslation('common');

  const handleCopyClick = () => {
    highlightTheLink();
    navigator.clipboard.writeText(postLink);
    postsGateway.sharePost('', postId);
  };

  const highlightTheLink = () => {
    const selection = window.getSelection();
    if (!selection) return;

    const range = document.createRange();
    range.selectNodeContents(postLinkRef.current!);

    selection.removeAllRanges();
    selection.addRange(range);
  };

  return (
    <BasePopup closePopup={closePopup}>
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <ReactSVG src={ICONS.SHARE_2} />
        </div>

        <p className={styles.shareText}>{t('share-with-connections')}</p>

        <div className={styles.linkContainer}>
          <p ref={postLinkRef}>{postLink}</p>
          <button onClick={handleCopyClick}>{t('copy')}</button>
        </div>
      </div>
    </BasePopup>
  );
};

export { SharePostPopup };
