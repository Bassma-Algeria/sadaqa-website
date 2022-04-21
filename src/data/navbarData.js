import clothesIcon from '../../public/svg/cloths_icon.svg';
import foodIcon from '../../public/svg/food_icon.svg';
import servicesIcon from '../../public/svg/services_icon.svg';
import electronicsIcon from '../../public/svg/electronics_icon.svg';
import furnitureIcon from '../../public/svg/furniture_icon.svg';
import booksIcon from '../../public/svg/books_icon.svg';
import sportsIcon from '../../public/svg/sports_icon.svg';
import cosmeticsIcon from '../../public/svg/cosmetics_icon.svg';
import animalsIcon from '../../public/svg/animals_icon.svg';
import gamesIcon from '../../public/svg/games_icon.svg';
import toolsIcon from '../../public/svg/tools_icon.svg';
import healthIcon from '../../public/svg/health_icon.svg';
import carsIcon from '../../public/svg/cars_icon.svg';
import othersIcon from '../../public/svg/others_icon.svg';
import familiesInNeedIcon from '../../public/svg/families_in_need_icon.svg';
import donationsRequestsIcon from '../../public/svg/donations_requests_icon.svg';
import callForHelpIcon from '../../public/svg/call_for_help_icon.svg';
import messagesIcon from '../../public/svg/nav_messages_icon.svg';
import dashboardIcon from '../../public/svg/dashboard_nav_icon.svg';
import editProfileIcon from '../../public/svg/edit_profile_nav_icon.svg';
import darkModeIcon from '../../public/svg/dark_mode_nav_icon.svg';
import logoutIcon from '../../public/svg/logout_nav_icon.svg';
import homeIcon from '../../public/svg/dashboard_activities_icon_empty.svg';
import myAdsIcon from '../../public/svg/dashboard_myads_icon_empty.svg';
import signupIcon from '../../public/svg/sign_up.svg';
import loginIcon from '../../public/svg/log_in.svg';
import notificationsIcon from '../../public/svg/notification.svg';
import newAdIcon from '../../public/svg/new_add.svg';

const donationsCategories = [
  {
    title: 'Clothes / Accessories',
    icon: clothesIcon.src,
    pageLink: '/donations/Clothes___Accessories',
  },
  {
    title: 'Food',
    icon: foodIcon.src,
    pageLink: '/donations/Food',
  },
  {
    title: 'Services',
    icon: servicesIcon.src,
    pageLink: '/donations/Services',
  },
  {
    title: 'Electronics / Appliances',
    icon: electronicsIcon.src,
    pageLink: '/donations/Electronics___Appliances',
  },
  {
    title: 'Home / Furnitures',
    icon: furnitureIcon.src,
    pageLink: '/donations/Home___Furnitures',
  },
  {
    title: 'Books / Magazines',
    icon: booksIcon.src,
    pageLink: '/donations/Books___Magazines',
  },
  {
    title: 'Sports',
    icon: sportsIcon.src,
    pageLink: '/donations/Sports',
  },
  {
    title: 'Cosmetics / Hygiene',
    icon: cosmeticsIcon.src,
    pageLink: '/donations/Cosmetics___Hygiene',
  },
  {
    title: 'Animals / Accessories',
    icon: animalsIcon.src,
    pageLink: '/donations/Animals___Accessories',
  },
  {
    title: 'Games / Toys',
    icon: gamesIcon.src,
    pageLink: '/donations/Games___Toys',
  },
  {
    title: 'Tools',
    icon: toolsIcon.src,
    pageLink: '/donations/Tools',
  },
  {
    title: 'Health / Medicines',
    icon: healthIcon.src,
    pageLink: '/donations/Health___Medicines',
  },
  {
    title: 'Cars Accessories',
    icon: carsIcon.src,
    pageLink: '/donations/Cars_Accessories',
  },
  {
    title: 'Others',
    icon: othersIcon.src,
    pageLink: '/donations/Others',
  },
];

const peopleNeedHelpCategories = [
  {
    title: 'Families in need',
    icon: familiesInNeedIcon.src,
    pageLink: '/people_need_help/family_in_need',
  },
  {
    title: 'Donations requests',
    icon: donationsRequestsIcon.src,
    pageLink: '/people_need_help/donation_request',
  },
  {
    title: 'Call for help',
    icon: callForHelpIcon.src,
    pageLink: '/people_need_help/call_for_help',
  },
];

const dashboardLinks = [
  {
    title: 'Messages',
    icon: messagesIcon.src,
    pageLink: '/dashboard/messages',
  },
  {
    title: 'Dashboard',
    icon: dashboardIcon.src,
    pageLink: '/dashboard/activities',
  },
  {
    title: 'Profile Information',
    icon: editProfileIcon.src,
    pageLink: '/dashboard/settings/public_info',
  },
  {
    title: 'Dark mode',
    icon: darkModeIcon.src,
  },
  {
    title: 'Logout',
    icon: logoutIcon.src,
  },
];

const baseBottomNavData = [
  {
    title: 'home',
    icon: homeIcon.src,
    link: '/',
  },
  {
    title: 'messages',
    icon: messagesIcon.src,
    link: '/dashboard/messages',
  },
  {
    title: 'new ad',
    icon: newAdIcon.src,
    link: '/create_new_ad',
  },
];

const phoneBottomNavData = {
  normalPage: [
    ...baseBottomNavData,
    {
      title: 'notifications',
      icon: notificationsIcon.src,
      link: '/dashboard/notifications',
    },
    {
      title: 'dashboard',
      icon: dashboardIcon.src,
      link: '/dashboard/activities',
    },
  ],
  dashbaord: [
    ...baseBottomNavData,
    {
      title: 'my ads',
      icon: myAdsIcon.src,
      link: '/dashboard/my_ads',
    },
    {
      title: 'dashboard',
      icon: dashboardIcon.src,
      link: '/dashboard/activities',
    },
  ],
  notLoggedIn: [
    {
      title: 'home',
      icon: homeIcon.src,
      link: '/',
    },
    {
      title: 'log in',
      icon: loginIcon.src,
      link: '/login',
    },
    {
      title: 'sign up',
      icon: signupIcon.src,
      link: '/signup',
    },
  ],
};

export { donationsCategories, peopleNeedHelpCategories, dashboardLinks, phoneBottomNavData };
