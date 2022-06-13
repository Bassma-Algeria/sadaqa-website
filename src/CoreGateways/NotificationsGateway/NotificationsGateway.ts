import { INotification } from '../../@types/Notifications';
import { RESTApiGateway } from '../utils/RESTApiGateway';

import { GetNotificationsFilters, INotificationsGateway } from './NotificationsGateway.interface';

class NotificationsGateway extends RESTApiGateway implements INotificationsGateway {
  constructor() {
    super('notifications');
  }

  async getNotifications(token: string, filters?: GetNotificationsFilters): Promise<INotification> {
    throw new Error('Method not implemented.');
  }
}

export { NotificationsGateway };
