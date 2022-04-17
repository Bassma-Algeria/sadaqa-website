import React, { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactSVG } from "react-svg";

// icons and images
import rightArrowIcon from "../../../public/svg/right_arrow_nav_links.svg";

const StyledTag = styled.div`
  ${tw`flex items-center gap-2 capitalize font-medium mt-6`}
  color: rgba(0, 0, 0, 0.2);
  font-size: 14px;

  svg {
    height: 10px;
    fill: rgba(0, 0, 0, 0.2);
  }

  @media only screen and (max-width: 600px) {
    ${tw`gap-1`}
    font-size: 12px;

    svg {
      height: 8px;
    }
  }
`;

const Tags = ({ type }) => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    let tags = window.location.pathname.split("/");
    tags.shift();

    setTags(tags);
  }, [type]);

  return (
    <div className="flex items-center gap-2">
      {tags.map((tag, index) => {
        return (
          <StyledTag key={index}>
            <Link href={`/${tag}`}>
              {tag.replace(/___/g, " / ").replace(/_/g, " ")}
            </Link>
            <ReactSVG src={rightArrowIcon.src} />
          </StyledTag>
        );
      })}
    </div>
  );
};

export default Tags;
