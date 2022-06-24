import { DONATIONS_CATEGORIES } from '../utils/constants/DonationsCategories';
import { PEOPLE_NEED_HELP_CATEGORIES } from '../utils/constants/PeopleNeedHelpCategories';

export type PostType = typeof PEOPLE_NEED_HELP_CATEGORIES[number]['nameKey'] | 'donation';
export type DonationCategory = typeof DONATIONS_CATEGORIES[number]['nameKey'];
export type PostStatus =
  | 'still-available'
  | 'no-available'
  | 'not-obtained'
  | 'already-obtained'
  | 'still-need-help'
  | 'already-got-help';

// const getAvailabiltyText = (postType, isActive) => {
//   if (postType === 'donation') {
//     return isActive ? 'Still Available' : 'Not Available (Given)';
//   } else if (postType === 'donation_request') {
//     return isActive ? 'Not Obtained Yet' : 'Already Obtained';
//   } else {
//     return isActive ? 'Still Need Help' : 'Already Got Help';
//   }
// };
