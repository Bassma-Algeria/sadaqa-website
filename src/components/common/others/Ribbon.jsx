import styled from "styled-components";
import tw from "twin.macro";

const Ribbon = styled.div`
  position: absolute;
  right: -5px;
  top: -5px;
  z-index: 1;
  overflow: hidden;
  width: 165px;
  height: 165px;
  text-align: right;

  p {
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    line-height: 20px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    width: 200px;
    padding: 0px 40px;
    display: block;
    background: #79a70a;
    background: linear-gradient(#9bc90d 0%, #79a70a 100%);
    box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
    position: absolute;
    top: 38px;
    right: -42px;

    &::before {
      content: "";
      position: absolute;
      left: 0px;
      top: 100%;
      z-index: -1;
      border-left: 3px solid #79a70a;
      border-right: 3px solid transparent;
      border-bottom: 3px solid transparent;
      border-top: 3px solid #79a70a;
    }

    &::after {
      content: "";
      position: absolute;
      right: 0px;
      top: 100%;
      z-index: -1;
      border-left: 3px solid transparent;
      border-right: 3px solid #79a70a;
      border-bottom: 3px solid transparent;
      border-top: 3px solid #79a70a;
    }
  }

  @media only screen and (max-width: 500px) {
    width: 120px;
    height: 120px;

    p {
      font-size: 12px;
      padding: 4px 26px;
      width: 145px;
      line-height: 1;
      top: 24px;
      right: -32px;
    }
  }
`;

export { Ribbon };
