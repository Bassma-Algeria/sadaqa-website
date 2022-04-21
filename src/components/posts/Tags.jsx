import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ReactSVG } from 'react-svg';

// icons and images
import rightArrowIcon from '../../../public/svg/right_arrow_nav_links.svg';

const StyledTag = styled.div`
  ${tw`flex items-center gap-2 capitalize font-medium mt-2`}
  color: rgba(0, 0, 0, 0.2);
  font-size: 14px;

  svg {
    height: 10px;
    fill: rgba(0, 0, 0, 0.2);
  }

  @media only screen and (max-width: 600px) {
    ${tw`gap-1 hidden`}
    font-size: 12px;

    svg {
      height: 8px;
    }
  }
`;

const Tags = ({ type, subType, postId, title }) => {
  return (
    <div className="flex items-center gap-2">
      <StyledTag>
        <Link href={`/${type}`}>{type.replace(/___/g, ' / ').replace(/_/g, ' ')}</Link>
        <ReactSVG src={rightArrowIcon.src} />
      </StyledTag>
      <StyledTag>
        <Link href={`/${type}/${subType.replace(/ \/ /g, '___').replace(/ /g, '_')}`}>
          {subType.replace(/___/g, ' / ').replace(/_/g, ' ')}
        </Link>
        <ReactSVG src={rightArrowIcon.src} />
      </StyledTag>
      <StyledTag>
        <Link href={`/posts/${postId}`}>{title}</Link>
        <ReactSVG src={rightArrowIcon.src} />
      </StyledTag>
    </div>
  );
};

export default Tags;
