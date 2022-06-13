import { INotification } from "../../@types/Notifications";

export interface GetNotificationsFilters {
  /** @default 1 */
  numOfChunck?: number;

  /** @default 20 */
  numOfNotificationsPerChunk?: number;
}

export interface INotificationsGateway {
  getNotifications(token: string, filters?: GetNotificationsFilters): Promise<INotification>;
}