import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const StyledCirculare = styled.div`
  ${tw`relative flex flex-col h-full justify-center items-center`}

  .percent {
    ${tw`relative`}
    width: 150px;
    height: 150px;

    svg {
      ${tw`relative`}
      width: 100%;
      height: 100%;
      transform: rotate(-90deg);

      circle {
        width: 100%;
        height: 100%;
        fill: none;
        stroke-width: 25;
        stroke: ${(props) => props.color};

        stroke-dasharray: 2000;
        stroke-dashoffset: 2000;
        stroke-linecap: round;

        &:nth-child(1) {
          stroke-dashoffset: unset;
          stroke-dasharray: unset;
          stroke: rgba(117, 113, 110, 0.03);
        }

        &:nth-child(2) {
          stroke: ${(props) => props.color};

          stroke-dasharray: ${(props) =>
            `calc(2000px + (1240px * ${props.percentage}) / 100)`};
        }
      }
    }

    .number {
      ${tw`absolute top-0 left-0 flex items-center justify-center font-semibold`}
      width: 100%;
      height: 100%;
      color: black;
      font-size: 30px;
    }
  }

  @media only screen and (max-width: 600px) {
    .percent {
      width: 130px;
      height: 130px;

      .number {
        font-size: 24px;

        & div p:nth-child(2) {
          font-size: 14px !important;
        }
      }
    }
  }

  @media only screen and (max-width: 400px) {
    .percent {
      width: 100px;
      height: 100px;

      .number {
        font-size: 20px;

        & div p:nth-child(2) {
          font-size: 12px !important;
        }
      }
    }
  }
`;

const CircularePercentage = ({
  percentage,
  color,
  circleText,
  containerRef,
}) => {
  return (
    <StyledCirculare percentage={percentage} color={color} ref={containerRef}>
      <div className="percent">
        <svg
          version="1.1"
          viewBox="0 0 500 500"
          preserveAspectRatio="xMidYMid meet"
        >
          <circle cx="250" cy="250" r="200"></circle>
          <circle cx="250" cy="250" r="200"></circle>
        </svg>
        <div className="number">
          <div className="flex flex-col items-center justify-center">
            <p>{percentage}%</p>
            <p
              style={{
                fontSize: 16,
                fontWeight: "700",
                textTransform: "capitalize",
              }}
            >
              {circleText}
            </p>
          </div>
        </div>
      </div>
    </StyledCirculare>
  );
};

export default CircularePercentage;
