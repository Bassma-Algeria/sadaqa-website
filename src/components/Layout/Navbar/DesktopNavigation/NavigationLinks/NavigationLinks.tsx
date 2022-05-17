import React from 'react';

import { DonationsLinks } from './DonationsLinks';
import { PeopleNeedHelpLinks } from './PeopleNeedHelpLinks';
import { RequestADonation } from './RequestADonation';

const NavigationLinks: React.FC = () => {
  return (
    <>
      <PeopleNeedHelpLinks />
      <DonationsLinks />
      <RequestADonation />
    </>
  );
};

export { NavigationLinks };
