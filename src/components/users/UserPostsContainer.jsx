import React, { useRef, useState } from "react";

// styles
import styles from "../../styles/profile.module.scss";

// helpers
import { POST_TYPES } from "../../utils/constants";
import { getHeaderToShow, isTypesNotAllowed } from "../../utils/usersHelpers";
import {
  filterPosts,
  getAvailabiltyText,
  linkFormatToTextFormat,
  numOfPostsOfType,
} from "../../utils/postsHelpers";

// components
import AdCard from "../common/cards/AdCard";
import NoAds from "../common/others/NoAds";
import { Ribbon } from "../common/others/Ribbon";

const UserPostsContainer = ({ role, first_name, association_name, posts }) => {
  const [postsToShow, setPostsToShow] = useState(posts);
  const headerToShow = getHeaderToShow(first_name, association_name);

  return (
    <div className={styles.postsContainer}>
      <h1>{headerToShow}</h1>
      <NavLinks setPostsToShow={setPostsToShow} posts={posts} role={role} />
      <PostsBody posts={postsToShow} />
    </div>
  );
};

const NavLinks = ({ setPostsToShow, posts, role }) => {
  const [activeType, setActiveType] = useState("all");
  const subNavLinksContainer = useRef(null);

  const handleLinkClick = (type) => {
    setPostsToShow(filterPosts(posts, type));
    setActiveType(type);

    if (type === POST_TYPES[POST_TYPES.length - 1]) {
      subNavLinksContainer.current.scrollLeft =
        subNavLinksContainer.current.scrollWidth;
    } else {
      subNavLinksContainer.current.scrollLeft = 0;
    }
  };

  return (
    <div className={styles.navLinks} ref={subNavLinksContainer}>
      {POST_TYPES.map(
        (type, index) =>
          !isTypesNotAllowed(role, type) && (
            <SubNavlink
              type={type}
              numOfPosts={numOfPostsOfType(posts, type)}
              onClick={() => handleLinkClick(type)}
              active={activeType === type}
              key={index}
            />
          )
      )}
    </div>
  );
};

const SubNavlink = ({ type, numOfPosts, onClick, active }) => {
  return (
    <div
      className={`${styles.link} ${active ? styles.active : ""}`}
      onClick={onClick}
    >
      <p>
        {linkFormatToTextFormat(type)} ({numOfPosts})
      </p>
    </div>
  );
};

const PostsBody = ({ posts }) => {
  return (
    <div className={styles.postsBody}>
      {posts.length === 0 ? (
        <NoAds styles={styles} />
      ) : (
        posts.map((post) => {
          return (
            <AdCard
              key={post.post_id}
              {...post}
              subType={post.category}
              wihtPostStatus
              isGrid
            >
              {!post.active && (
                <Ribbon>
                  <p>{getAvailabiltyText(post.type, post.active)}</p>
                </Ribbon>
              )}
            </AdCard>
          );
        })
      )}
    </div>
  );
};

export default UserPostsContainer;
