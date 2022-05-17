import { ICONS } from './Icons';
import { LinkCategory } from '../../@types/Links';

const PEOPLE_NEED_HELP_CATEGORIES: LinkCategory[] = [
  {
    nameKey: 'families-in-need',
    icon: ICONS.FAMILIES_IN_NEED,
    pageLink: '/people_need_help/family_in_need',
  },
  {
    nameKey: 'donation-requests',
    icon: ICONS.DONATION_REQUESTS,
    pageLink: '/people_need_help/donation_request',
  },
  {
    nameKey: 'call-for-help',
    icon: ICONS.CALL_FOR_HELP,
    pageLink: '/people_need_help/call_for_help',
  },
];

export { PEOPLE_NEED_HELP_CATEGORIES };
