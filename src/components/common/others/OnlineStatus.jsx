import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import tw from "twin.macro";

// helpers
import { isUserOnline } from "../../../utils/usersHelpers";

const StyledOnlineStatus = styled.div`
  ${tw`flex items-center gap-3`}
  font-size: 16px;
  color: #c8c8c8;

  .dot {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 4px solid white;

    &.online {
      background-color: #fdec4e;
    }
    &.offline {
      background-color: #fa3838;
    }

    &.lg {
      width: 30px;
      height: 30px;
      border: 5px solid white;
    }
  }

  @media only screen and (max-width: 900px) {
    font-size: 14px;
    gap: 5px;
  }
`;

const OnlineStatus = ({ userId, withText, className, size }) => {
  const { onlineUsersIds } = useSelector((state) => state.users);

  const [userOnline, setUserOnline] = useState(false);

  useEffect(() => {
    setUserOnline(isUserOnline(userId, onlineUsersIds));
  }, [onlineUsersIds, userId]);

  return (
    <StyledOnlineStatus className={className}>
      <div
        className={`dot ${
          userOnline ? "online" : withText ? "offline" : "hidden"
        } ${size}`}
      ></div>
      {withText && <p>{userOnline ? "Active now" : "Not available"}</p>}
    </StyledOnlineStatus>
  );
};

export default OnlineStatus;
