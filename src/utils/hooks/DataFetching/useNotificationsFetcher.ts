import { postsGateway } from '../../../Gateways';
import { NotificationsGateway } from '../../../Gateways/NotificationsGateway/NotificationsGateway';
import type { GetNotificationsFilters } from '../../../Gateways/NotificationsGateway/NotificationsGateway.interface';

import { useDataFetcher } from './useDataFetcher';

const useNotificationsFetcher = (token: string, filters?: GetNotificationsFilters) => {
  const {
    data: notifications,
    refrech,
    status,
  } = useDataFetcher(() => notificationsGateway.getNotifications(token, filters));

  return { notifications, status, refrech };
};

export { useNotificationsFetcher };
