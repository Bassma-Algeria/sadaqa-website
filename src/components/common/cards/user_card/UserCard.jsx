import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

// styles
import styles from "../../../../styles/profile.module.scss";

// components
import Button from "../../buttons/Button";
import UnauthorizePopup from "../../pop-ups/UnauthorizePopup";
import BaseUserCard from "./BaseCard";
import { ActionMenuDots } from "../../others/ActionsMenu";

const UserCard = (props) => {
  const {
    profileInfo: {
      generalInfo: { user_id },
    },
  } = useSelector((state) => state.authUser);

  const isAuthUserProfile = user_id === props.userInfo.user_id;

  return (
    <>
      {isAuthUserProfile ? (
        <AuthUserCard {...props} />
      ) : (
        <NormalUserCard {...props} />
      )}
    </>
  );
};

const AuthUserCard = (props) => {
  return (
    <BaseUserCard {...props}>
      <div className="px-10">
        <Link href="/dashboard/settings/public_info">
          <Button size="sm" secondary full>
            Edit Profile
          </Button>
        </Link>
      </div>
    </BaseUserCard>
  );
};

const NormalUserCard = (props) => {
  const { isAuthenticated } = useSelector((state) => state.authUser);

  const router = useRouter();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSendMessageClick = () => {
    const messagesPage = `/dashboard/messages?chatParticipantId=${props.userInfo.user_id}`;
    router.prefetch(messagesPage);

    if (isAuthenticated) router.push(messagesPage);
    else setIsPopupOpen(true);
  };

  return (
    <>
      <BaseUserCard {...props}>
        <MenuDots userId={props.userInfo.user_id} />
        <div className="px-10">
          <Button size="sm" primary full onClick={handleSendMessageClick}>
            Send Message
          </Button>
        </div>
      </BaseUserCard>
      {isPopupOpen && (
        <UnauthorizePopup
          action={"sendMessage"}
          setIsPopupOpen={setIsPopupOpen}
        />
      )}
    </>
  );
};

const MenuDots = (userId) => {
  const router = useRouter();
  return (
    <>
      {router.asPath.includes("user") ? (
        <div className={styles.menuDots}>
          <ActionMenuDots
            element="user"
            elementLink={`/users/${userId}`}
            menuPosition="left"
          />
        </div>
      ) : null}
    </>
  );
};

export default UserCard;
