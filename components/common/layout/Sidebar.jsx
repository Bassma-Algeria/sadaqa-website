import React from "react";
import Link from "next/link";
import styled from "styled-components";
import tw from "twin.macro";
import {
  donationsCategories,
  peopleNeedHelpCategories,
} from "../../../data/navbarData";
import { ReactSVG } from "react-svg";

const StyledSidebar = styled.div`
  ${tw`bg-white left-0 flex justify-center`}
  width: 20%;
  min-width: 250px;
  z-index: 7;
  padding-top: 110px;
  height: 100vh;
  overflow-y: scroll;
  border-right: 1px solid #edf6f2;
  scrollbar-width: none;
  position: ${(props) => (props.isFooterVisible ? "absolute" : "fixed")};
  bottom: ${(props) => (props.isFooterVisible ? 0 : "unset")};
  top: ${(props) => (props.isFooterVisible ? "unset" : 0)};

  @media only screen and (max-width: 900px) {
    ${tw`hidden`}
  }

  /* scroll bar */
  ::-webkit-scrollbar {
    width: 0px;
  }

  .sections {
    ${tw`flex flex-col items-start justify-start gap-4`}

    section {
      .sectionTitle {
        cursor: pointer;
        font-size: 18px;
        font-weight: 600;
      }

      .category {
        ${tw`flex items-center my-2 gap-4 cursor-pointer font-medium`}
        font-size: 15px;
        border-radius: 8px;

        &:hover {
          text-decoration: underline;
        }

        .categoryIcon {
          ${tw`flex items-center justify-center`};
          width: 30px;

          svg {
            height: auto;
            width: 100%;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1300px) {
    .sections {
      section {
        .sectionTitle {
          font-size: 16px;
        }

        .category {
          font-size: 14px;
        }
      }
    }
  }
`;

const Sidebar = ({ isFooterVisible }) => {
  return (
    <StyledSidebar isFooterVisible={isFooterVisible}>
      <div className="sections">
        <section>
          <div className="sectionTitle">
            <Link href="/people_need_help">
              <h1>Give Help To Others</h1>
            </Link>
          </div>
          <div className="sectionCategories">
            {peopleNeedHelpCategories.map((category, index) => {
              return <Category key={index} {...category} />;
            })}
          </div>
        </section>
        <section>
          <div className="sectionTitle">
            <Link href="/donations">
              <h1>Donations</h1>
            </Link>
          </div>
          <div className="sectionCategories">
            {donationsCategories.map((category, index) => {
              return <Category key={index} {...category} />;
            })}
          </div>
        </section>
      </div>
    </StyledSidebar>
  );
};

const Category = ({ pageLink, icon, title }) => (
  <Link href={pageLink}>
    <div className="category">
      <div className="categoryIcon">
        <ReactSVG src={icon} />
      </div>
      <p>{title}</p>
    </div>
  </Link>
);

export default Sidebar;
