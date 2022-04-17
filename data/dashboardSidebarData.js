import activitiesIconEmpty from "../public/svg/dashboard_activities_icon_empty.svg";
import activitiesIconFilled from "../public/svg/dashboard_activities_icon_filled.svg";
import myAdsIconEmpty from "../public/svg/dashboard_myads_icon_empty.svg";
import myAdsIconFilled from "../public/svg/dashboard_myads_icon_filled.svg";
import notificationsIconEmpty from "../public/svg/dashboard_notification_icon_empty.svg";
import notificationsIconFilled from "../public/svg/dashboard_notification_icon_filled.svg";
import profileIconEmpty from "../public/svg/dashboard_profile_icon_empty.svg";
import profileIconFilled from "../public/svg/dashboard_profile_icon_filled.svg";
import chatIconEmpty from "../public/svg/dashboard_chat_icon_empty.svg";
import chatIconFilled from "../public/svg/dashboard_chat_icon_filled.svg";
import settingsIconEmpty from "../public/svg/dashboard_settings_icon_empty.svg";
import settingsIconFilled from "../public/svg/dashboard_settings_icon_filled.svg";
import logoutIcon from "../public/svg/dashboard_logout_icon.svg";

export const linksData = [
  {
    name: "Activities",
    iconLinkEmpty: activitiesIconEmpty.src,
    iconLinkFilled: activitiesIconFilled.src,
    link: "/dashboard/activities",
  },
  {
    name: "My Ads",
    iconLinkEmpty: myAdsIconEmpty.src,
    iconLinkFilled: myAdsIconFilled.src,
    link: "/dashboard/my_ads",
  },
  {
    name: "Notifications",
    iconLinkEmpty: notificationsIconEmpty.src,
    iconLinkFilled: notificationsIconFilled.src,
    link: "/dashboard/notifications",
  },
  {
    name: "Account",
    iconLinkEmpty: profileIconEmpty.src,
    iconLinkFilled: profileIconFilled.src,
    link: "/dashboard/profile",
  },
  {
    name: "Messages",
    iconLinkEmpty: chatIconEmpty.src,
    iconLinkFilled: chatIconFilled.src,
    link: "/dashboard/messages",
  },
  {
    name: "Settings",
    iconLinkEmpty: settingsIconEmpty.src,
    iconLinkFilled: settingsIconFilled.src,
    link: "/dashboard/settings/public_info",
    subLinks: [
      {
        name: "Public Information",
        link: "/dashboard/settings/public_info",
      },
      {
        name: "Private Information",
        link: "/dashboard/settings/private_info",
      },
      {
        name: "Preferences",
        link: "/dashboard/settings/preferences",
      },
    ],
  },
  {
    name: "Logout",
    iconLinkEmpty: logoutIcon.src,
    link: "/",
  },
];
