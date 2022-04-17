import React from "react";

// components
import { Header } from "../common/others/Headers";
import PeopleNeedHelpSubType from "../people_need_help/PeopleNeedHelpSubType";

const PeopleNeedHelp = () => {
  return (
    <>
      <Header style={{ padding: "70px 0 30px 0" }}>People Need Help</Header>

      <PeopleNeedHelpSubType numOfPostsToShow={2} subType="call_for_help" />
      <PeopleNeedHelpSubType numOfPostsToShow={2} subType="family_in_need" />
      <PeopleNeedHelpSubType numOfPostsToShow={2} subType="donation_request" />
    </>
  );
};

export default PeopleNeedHelp;
