import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import { useAuthContext } from '../../utils/hooks/useAuthContext';
import { useNeedAuthPopup } from '../../utils/hooks/Popups/useNeedAuthPopup';

import { Button } from '../common/Button/Button';
import { BaseUserCard } from './BaseUserCard/BaseUserCard';

interface Props extends React.ComponentProps<typeof BaseUserCard> {}

const UserCard: React.FC<Props> = ({ children, ...props }) => {
  const { push } = useRouter();
  const { t } = useTranslation('common');
  const { isAuthenticated } = useAuthContext();
  const { NeedAuthPopup, openPopup } = useNeedAuthPopup();

  const handleClick = () => {
    if (!isAuthenticated) openPopup();
    else push(`/dashboard/messages`);
  };

  return (
    <BaseUserCard {...props}>
      <NeedAuthPopup />

      <Button variant="primary" size="sm" onClick={handleClick}>
        {t('send-message')}
      </Button>
    </BaseUserCard>
  );
};

export { UserCard };
