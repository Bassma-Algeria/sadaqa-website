import styled from 'styled-components';
import tw from 'twin.macro';

const Button = styled.button`
  ${props => {
    if (props.primary) {
      return tw`bg-primary text-white hover:bg-primaryHover flex items-center justify-center gap-2`;
    } else {
      return tw`bg-white text-primary border border-primary hover:text-primaryHover hover:border-primaryHover flex items-center justify-center gap-2`;
    }
  }}
  ${props => {
    if (props.size === 'sm') {
      return tw`text-base px-5 py-2 m-4 mx-1 rounded-2xl font-semibold`;
    } else if (props.size === 'md') {
      return tw`text-lg px-10 py-3 m-4 rounded-2xl font-bold`;
    } else {
      return tw`text-xl px-8 py-5 m-4 rounded-3xl font-bold`;
    }
  }}
  ${props => {
    if (props.full) {
      return tw`w-full`;
    }
  }}
  ${props => {
    if (props.disabled) {
      return `
        opacity: 0.3 !important;
        cursor: default !important;
      `;
    }
  }}
  svg {
    fill: white;
    width: 18px;
  }
  @media only screen and (max-width: 900px) {
    ${tw`w-full`}
    font-size: 14px;
  }
`;

export default Button;
