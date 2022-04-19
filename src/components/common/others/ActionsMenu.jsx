import React, { useState, useEffect } from "react";
import router from "next/router";
import styled from "styled-components";
import tw from "twin.macro";
import { isMobile } from "react-device-detect";

// helpers
import { isClickedElementInsideTarget } from "../../../utils/navbarHelpers";

// components
import SharePopup from "../pop-ups/SharePopup";
import SignalPopup from "../pop-ups/SignalPopup";

const StyledContainer = styled.div`
  ${tw`relative flex flex-col items-center gap-1 cursor-pointer mb-4`}
  width: 20px;

  .menuDot {
    background-color: #c8c8c8;
    width: 5px;
    height: 5px;
    border-radius: 50%;
  }

  .menuList {
    ${tw`absolute bg-white p-1`}
    left: ${({ menuPosition }) => (menuPosition === "right" ? "0" : "unset")};
    right: ${({ menuPosition }) => (menuPosition === "left" ? "0" : "unset")};
    cursor: default;
    top: 100%;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.07);
    width: 100px;
    border-radius: 10px;
    z-index: 3;
    animation: menuListAnimation 0.3s ease forwards;

    .menuItem {
      ${tw`text-black p-2 px-4 cursor-pointer font-medium`}
      border-radius: 8px;
      transition: all 0.3s ease;

      &:hover {
        background-color: #edf6f2;
      }
    }

    @keyframes menuListAnimation {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }
  }

  @media only screen and (max-width: 650px) {
    ${tw`mb-0`}
    .menuDot {
      width: 4px;
      height: 4px;
    }
  }

  @media only screen and (max-width: 500px) {
    .menuList {
      width: 80px;
      .menuItem {
        ${tw`text-center`}
        padding: 5px;
        font-size: 14px;
      }
    }
  }
`;

const ActionMenuDots = ({ element, elementLink, menuPosition }) => {
  const [isMenuListOpen, setIsMenuListOpen] = useState(false);

  return (
    <StyledContainer
      menuPosition={menuPosition}
      onClick={() => setIsMenuListOpen(true)}
    >
      <div className="menuDot"></div>
      <div className="menuDot"></div>
      <div className="menuDot"></div>

      {isMenuListOpen && (
        <MenuList
          elementLink={elementLink}
          element={element}
          closeMenuList={() => setIsMenuListOpen(false)}
        />
      )}
    </StyledContainer>
  );
};

const MenuList = ({ elementLink, element, closeMenuList }) => {
  useEffect(() => {
    const handleClick = (e) => {
      if (!isClickedElementInsideTarget("menu_list", e.target)) closeMenuList();
    };
    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div
      className="menuList"
      id="menu_list"
      onClick={() => (document.getElementById("menu_list").style.zIndex = 10)}
    >
      {getMenuListItems(element).map((item, index) => {
        return (
          <MenuItem
            key={index}
            item={item}
            elementLink={elementLink}
            element={element}
          />
        );
      })}
    </div>
  );
};

const MenuItem = ({ item, elementLink, element }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const profileCard = document.getElementById("user_card");
    if (isPopupOpen && router.asPath.includes("user"))
      profileCard.style.zIndex = 10;
    else profileCard.style.zIndex = "unset";
  }, [isPopupOpen]);

  const handleClick = () => {
    if (isMobile && navigator.share && item === "share") {
      navigator.share({
        title: "Check this ad",
        text: "Check this",
        url: elementLink,
      });
    } else {
      setIsPopupOpen(true);
    }
  };

  return (
    <>
      <div className="menuItem" onClick={handleClick}>
        <p>{item}</p>
      </div>
      {isPopupOpen && (
        <PopupToShow
          item={item}
          elementLink={elementLink}
          setIsPopupOpen={setIsPopupOpen}
          element={element}
        />
      )}
    </>
  );
};

const PopupToShow = ({ item, elementLink, setIsPopupOpen, element }) => {
  switch (item) {
    case "share":
      return (
        <SharePopup
          postLink={elementLink}
          setIsSharePopupOpen={setIsPopupOpen}
        />
      );
      break;

    case "signal":
      return (
        <SignalPopup
          signalItem={element}
          signalItemLink={elementLink}
          setIsPopupOpen={setIsPopupOpen}
        />
      );
      break;

    default:
      return null;
      break;
  }
};

const getMenuListItems = (element) => {
  switch (element) {
    case "Ad":
      return ["share", "signal"];
      break;

    case "user":
      return ["signal"];
      break;

    default:
      return [];
      break;
  }
};

export { ActionMenuDots };
