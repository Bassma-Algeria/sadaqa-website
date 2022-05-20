import { INotification } from "../../@types/Notifications";
import { RestApiGateway } from "../Common/RestApiGateway";

import { GetNotificationsFilters, INotificationsGateway } from "./NotificationsGateway.interface";

class NotificationsGateway extends RestApiGateway implements INotificationsGateway  {
  private BASE_URL: string;

  constructor() {
    super();
    this.BASE_URL = `${this.BASE_REST_URL}/notifications`;
  }

  async getNotifications(token: string, filters?: GetNotificationsFilters) {
    throw new Error("Method not implemented.");
  }
}

export {NotificationsGateway}