import React from "react";

// components
import DonationsSubType from "../../components/donations/DonationsSubType";
import PeopleNeedHelpSubType from "../../components/people_need_help/PeopleNeedHelpSubType";

const SimilarAds = ({ postInfo }) => {
  return (
    <div style={{ marginTop: 50 }}>
      {postInfo.type === "donation" ? (
        <DonationsSubType subType={postInfo.category} numOfPostsToShow={9} />
      ) : (
        <PeopleNeedHelpSubType subType={postInfo.type} numOfPostsToShow={9} />
      )}
    </div>
  );
};

export default SimilarAds;
