import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import tw from "twin.macro";

// redux
import { setPreferences } from "../../../redux/actions/userActions";

const ToggleButtonContainer = styled.div`
  ${tw`relative cursor-pointer`}
  border-radius: ${(props) => (props.small ? "15px" : "20px")};
  width: ${(props) => (props.small ? "60px" : "80px")};
  height: ${(props) => (props.small ? "30px" : "40px")};
  padding: 5px;
  z-index: 1;
  background-color: rgba(127, 126, 126, 0.25);
  transition: all 0.4s ease;

  .circle {
    ${tw`absolute bg-white`}
    border-radius: 50%;
    width: ${(props) => (props.small ? "20px" : "30px")};
    height: ${(props) => (props.small ? "20px" : "30px")};
    top: 5px;
    left: 5px;
    transition: left 0.4s ease;
  }

  &.darkModeActive {
    background-color: #8289e9;

    .circle {
      left: ${(props) => (props.small ? "35px" : "45px")};
    }
  }

  @media only screen and (max-width: 900px) {
    width: 60px;
    height: 30px;
    border: 15px;

    .circle {
      width: 20px;
      height: 20px;
    }

    &.darkModeActive {
      .circle {
        left: 35px;
      }
    }
  }
`;

const DisplayModeToggleButton = ({ small }) => {
  const [cookies, setCookies] = useCookies(["preferDisplayMode"]);
  const dispatch = useDispatch();

  const [preferDisplayMode, setPreferDisplayModepreferDisplayMode] = useState(
    cookies.preferDisplayMode
  );

  const handleToggleButtonClick = () => {
    let modeSelected;
    if (preferDisplayMode === "dark") modeSelected = "light";
    else modeSelected = "dark";

    setPreferDisplayModepreferDisplayMode(modeSelected);
    setCookies("preferDisplayMode", modeSelected, { path: "/" });
    dispatch(setPreferences({ display_mode: modeSelected }));
  };

  useEffect(() => {
    setPreferDisplayModepreferDisplayMode(cookies.preferDisplayMode);
  }, [cookies.preferDisplayMode]);

  return (
    <ToggleButtonContainer
      onClick={handleToggleButtonClick}
      className={`toggleButton ${
        preferDisplayMode === "dark" ? "darkModeActive" : ""
      }`}
      size=""
      small={small}
    >
      <div className="circle"></div>
    </ToggleButtonContainer>
  );
};

export default DisplayModeToggleButton;
