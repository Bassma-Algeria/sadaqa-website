import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Hr = styled.hr`
  border: 0;
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 1px;
  margin: 20px 0 40px 0;

  @media only screen and (max-width: 900px) {
    margin: 10px 0;
  }
`;

export default Hr;
