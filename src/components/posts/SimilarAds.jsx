import React from 'react';

// components
import DonationsSubType from '../donations/DonationsSubType';
import PeopleNeedHelpSubType from '../people_need_help/PeopleNeedHelpSubType';

const SimilarAds = ({ postInfo }) => {
  return (
    <div style={{ marginTop: 50 }}>
      {postInfo.type === 'donation' ? (
        <DonationsSubType subType={postInfo.category} numOfPostsToShow={9} />
      ) : (
        <PeopleNeedHelpSubType subType={postInfo.type} numOfPostsToShow={9} />
      )}
    </div>
  );
};

export default SimilarAds;
