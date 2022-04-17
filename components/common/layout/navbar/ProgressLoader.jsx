import React, { useEffect, useState } from "react";
import Router from "next/router";
import styled from "styled-components";
import tw from "twin.macro";

const StyledLoader = styled.div`
  ${tw`absolute bg-primary`}
  bottom: -2px;
  width: 0%;
  height: 2px;
  animation: ${({ isLoading, isComplete }) => {
    if (isLoading) {
      return "loadingStart 0.4s ease forwards, loadingLatency 5s ease 1s forwards";
    } else if (isComplete) {
      return "loadingComplete 0.2s ease forwards, notLoading 0s ease 0.4s forwards";
    } else {
      return "notLoading 0s ease forwards";
    }
  }};

  @keyframes loadingStart {
    0% {
      width: 0%;
    }

    20% {
      width: 10%;
    }

    100% {
      width: 70%;
    }
  }

  @keyframes loadingLatency {
    0% {
      width: 70%;
    }
    100% {
      width: 90%;
    }
  }

  @keyframes loadingComplete {
    0% {
      width: 70%;
    }

    100% {
      width: 100%;
    }
  }

  @keyframes notLoading {
    100% {
      width: 0%;
    }
  }

  @media only screen and (max-width: 900px) {
    height: 1px;
    bottom: -1px;
  }
`;

const ProgressLoader = () => {
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", (url) => {
      setIsLoadingComplete(false);
      setIsPageLoading(true);
    });

    Router.events.on("routeChangeComplete", (url) => {
      setIsPageLoading(false);
      setIsLoadingComplete(true);
    });
  }, []);

  return (
    <StyledLoader isLoading={isPageLoading} isComplete={isLoadingComplete} />
  );
};

export default ProgressLoader;
