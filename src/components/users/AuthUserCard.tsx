import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { Button } from '../common/Button/Button';
import { BaseUserCard } from './BaseUserCard/BaseUserCard';

interface Props extends React.ComponentProps<typeof BaseUserCard> {}

// TODO: remove the props, and get the user info from the authContext, and pass them to the BaseUserCard
const AuthUserCard: React.FC<Props> = ({ children, ...props }) => {
  const { t } = useTranslation('common');

  return (
    <BaseUserCard {...props}>
      <Link href="/dashboard/settings/edit-profile-info">
        <Button variant="secondary" size="sm">
          {t('edit-profile')}
        </Button>
      </Link>
    </BaseUserCard>
  );
};

export { AuthUserCard };
