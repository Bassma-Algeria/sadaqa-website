import styled from "styled-components";
import tw from "twin.macro";

const Header = styled.h1`
  font-size: 45px;
  font-weight: 600;
  margin: 20px 0;
  margin-top: 10px;
  text-transform: capitalize;

  @media only screen and (max-width: 1000px) {
    font-size: 40px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 35px;
    margin: 15px 0;
    padding: 20px 0px !important;
  }
  @media only screen and (max-width: 600px) {
    font-size: 30px;
    margin: 10px 0;
  }
  @media only screen and (max-width: 500px) {
    margin: 0;
    padding: 10px 0 !important;
  }

  @media only screen and (max-width: 400px) {
    margin: 0;
    font-size: 22px;
  }
  @media only screen and (max-width: 300px) {
    font-size: 18px;
  }
`;

const SubHeader = styled.h3`
  font-size: 35px;
  font-weight: 600;
  margin: 10px 0;
  text-transform: capitalize;

  @media only screen and (max-width: 1000px) {
    font-size: 30px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 27px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 22px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 300px) {
    font-size: 16px;
  }
`;

const SettingsHeader = styled.h1`
  ${tw`font-semibold w-full mb-16 capitalize`}
  font-size: 24px;
  color: #c8c8c8;
  padding-bottom: 0.8rem;
  border-bottom: 2px solid #c8c8c8;

  @media only screen and (max-width: 900px) {
    ${tw`mt-0 mb-4 font-medium`}
    text-transform: none;
    font-size: 12px;
    padding-bottom: 3px;
    border-bottom: 1px solid #c8c8c8;
  }
`;

export { Header, SubHeader, SettingsHeader };
