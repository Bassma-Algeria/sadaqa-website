import { ICONS } from './Icons';
import { LinkCategory } from '../../@types/Links';

const PEOPLE_NEED_HELP_CATEGORIES = [
  {
    nameKey: 'families-in-need',
    icon: ICONS.FAMILIES_IN_NEED,
    pageLink: '/people-need-help/families-in-need',
  },
  {
    nameKey: 'donation-requests',
    icon: ICONS.DONATION_REQUESTS,
    pageLink: '/people-need-help/donation-requests',
  },
  {
    nameKey: 'call-for-help',
    icon: ICONS.CALL_FOR_HELP,
    pageLink: '/people-need-help/call-for-help',
  },
] as const;

export { PEOPLE_NEED_HELP_CATEGORIES };
