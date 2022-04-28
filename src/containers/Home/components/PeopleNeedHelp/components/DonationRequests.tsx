import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

// icons
import rightArrowIcon from '../../../../../../public/svg/right_arrow_see_more_icon.svg';

// componenets
import AdCard from '../../../../../components/common/cards/AdCard';
import { SubHeader } from '../../../../../components/common/others/Headers';
import Spinner from '../../../../../components/common/loaders/Spinner';
import NoAds from '../../../../../components/common/others/NoAds';
import { postsGateway } from '../../../../../Gateways';
import { IPost } from '../../../../../@types/Posts';

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

const DonationRequests: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <div className="flex items-center justify-between" style={{ marginBottom: '-10px' }}>
        <SubHeader>{t('donation-requests')}</SubHeader>
        <Link href={`/people_need_help/donation_request`}>
          <SvgContainer>
            <ReactSVG src={rightArrowIcon.src} />
          </SvgContainer>
        </Link>
      </div>

      <Ads />
    </>
  );
};

const Ads: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>();
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    postsGateway
      .getPosts({ postType: 'donation_request', numOfPostsPerChunk: 2, numOfChunk: 1 })
      .then(setPosts)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading ? (
        <div style={{ height: 350, width: '100%' }}>
          <Spinner style={{ fontSize: 12, top: 150, color: '#000' }} />
        </div>
      ) : !posts ? (
        <div style={{ height: 350, width: '100%' }}>
          <NoAds />
        </div>
      ) : (
        <div className={`flex flex-wrap`} style={{ gap: '2%' }}>
          {posts.map(post => {
            return <AdCard key={post.post_id} {...post} subType={'donation_request'} />;
          })}
        </div>
      )}
    </>
  );
};

export { DonationRequests };
