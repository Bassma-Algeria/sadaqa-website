import React from 'react';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import tw from 'twin.macro';

// images and icons
import post from '../../../../public/svg/postit.svg';

const StyledContainer = styled.div`
  ${tw`flex flex-col w-full h-full items-center justify-center capitalize font-medium text-center`}
  font-size: 22px;

  svg {
    height: 40px;
  }
`;

const NoAds = ({ styles, message }) => {
  return (
    <StyledContainer className={styles?.noAds}>
      <ReactSVG src={post.src} />
      <p>{message ? message : 'no ads here.'}</p>
    </StyledContainer>
  );
};

export default NoAds;
