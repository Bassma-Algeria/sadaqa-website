// images and icons
import donationIcon from "../public/svg/dashboard_donations_icon.svg";
import donationRequestIcon from "../public/svg/donation_requests_dashboard_icon.svg";
import callForHelpIcon from "../public/svg/call_for_help_icon.svg";
import familyInNeedIcon from "../public/svg/families_in_need_icon.svg";
import editProfileIcon from "../public/svg/edit_profile_nav_icon.svg";
import privateInfoIcon from "../public/svg/padlock.svg";
import preferencesIcon from "../public/svg/preferences.svg";
import { LANGUAGES } from "../utils/constants";

const ACTIVITIES_DATA = [
  {
    name: "Call For Helps",
    icon: callForHelpIcon.src,
  },
  {
    name: "Families In Need",
    icon: familyInNeedIcon.src,
  },
  {
    name: "Donations",
    icon: donationIcon.src,
  },
  {
    name: "Donation Requests",
    icon: donationRequestIcon.src,
  },
];

const LANGUAGES_DROP_DOWN = {
  label: "",
  name: "language",
  placeholder: "Tab to choose :",
  type: "dropdown",
  options: LANGUAGES,
};

const SETTINGS_SECTION_DATA = [
  {
    sectionTitle: "settings",
    sectionItems: [
      {
        title: "personal info",
        icon: editProfileIcon.src,
        link: "/dashboard/settings/public_info",
      },
      {
        title: "private info",
        icon: privateInfoIcon.src,
        link: "/dashboard/settings/private_info",
      },
      {
        title: "preferences",
        icon: preferencesIcon.src,
        link: "/dashboard/settings/preferences",
      },
    ],
  },
];

export { ACTIVITIES_DATA, LANGUAGES_DROP_DOWN, SETTINGS_SECTION_DATA };
