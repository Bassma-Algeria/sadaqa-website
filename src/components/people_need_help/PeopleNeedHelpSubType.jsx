import React from 'react';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import VisibilitySensor from 'react-visibility-sensor';
import { useRouter } from 'next/router';

// icons
import rightArrowIcon from '../../../public/svg/right_arrow_see_more_icon.svg';

// helpers
import { linkFormatToTextFormat } from '../../utils/postsHelpers';

// redux
import { getPeopleNeedHelpData } from '../../redux/actions/postsActions';

// componenets
import AdCard from '../common/cards/AdCard';
import { SubHeader } from '../common/others/Headers';
import Spinner from '../common/loaders/Spinner';
import NoAds from '../common/others/NoAds';

const SvgContainer = styled.div`
  cursor: pointer;
  svg {
    height: 20px;
    width: auto;

    @media only screen and (max-width: 700px) {
      height: 15px;
    }
  }
`;

const PeopleNeedHelpSubType = ({ subType, numOfPostsToShow }) => {
  const {
    peopleNeedHelp: {
      [subType]: { isDataLoaded },
    },
  } = useSelector(state => state.posts);

  const router = useRouter();
  const dispatch = useDispatch();

  const handleVisibiltyChange = isVisible => {
    if (isVisible) {
      const numOfPage = 1;
      dispatch(getPeopleNeedHelpData(subType, numOfPage, numOfPostsToShow));
    }
  };

  return (
    <VisibilitySensor onChange={handleVisibiltyChange} active={!isDataLoaded}>
      <div style={{ marginBottom: 80 }}>
        <SectionHeader subType={subType} isPostPage={router.asPath.includes('post')} />
        <Ads
          subType={subType}
          isPostPage={router.asPath.includes('post')}
          currentPostId={Number(router.asPath.split('/')[router.asPath.split('/').length - 1])}
        />
      </div>
    </VisibilitySensor>
  );
};

const SectionHeader = ({ subType, isPostPage }) => {
  return (
    <div className="flex items-center justify-between" style={{ marginBottom: '-10px' }}>
      <SubHeader>{isPostPage ? 'Similar Ads' : linkFormatToTextFormat(subType)}</SubHeader>
      <Link href={`/people_need_help/${subType}`}>
        <SvgContainer>
          <ReactSVG src={rightArrowIcon.src} />
        </SvgContainer>
      </Link>
    </div>
  );
};

const Ads = ({ subType, isPostPage, currentPostId }) => {
  let {
    peopleNeedHelp: {
      [subType]: { isDataLoaded, data },
    },
  } = useSelector(state => state.posts);

  if (isPostPage) {
    data = data.filter(post => post.post_id !== currentPostId);
  }

  return (
    <>
      {!isDataLoaded ? (
        <div style={{ height: 350, width: '100%' }}>
          <Spinner style={{ fontSize: 12, top: 150, color: '#000' }} />
        </div>
      ) : data.length === 0 ? (
        <div style={{ height: 350, width: '100%' }}>
          <NoAds />
        </div>
      ) : (
        <div className={`flex flex-wrap`} style={{ gap: '2%' }}>
          {data.map(post => {
            return <AdCard key={post.post_id} {...post} subType={subType} />;
          })}
        </div>
      )}
    </>
  );
};

export default PeopleNeedHelpSubType;
