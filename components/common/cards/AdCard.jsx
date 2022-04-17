import React from "react";
import { ReactSVG } from "react-svg";
import moment from "moment";
import Link from "next/link";
import router from "next/router";

// styles
import styles from "../../../styles/cards.module.scss";

// helpers
import {
  getPostThumbnail,
  linkFormatToTextFormat,
} from "../../../utils/postsHelpers";

// components
import LikeButton from "../buttons/LikeButton";
import ShareButton from "../buttons/ShareButton";

const AdCard = (props) => {
  return (
    <div
      ref={props.adCardRef}
      className={`${styles.adCard} ${
        props.isGrid ? styles.grid : styles.inline
      } ${props.isDashboardCard && styles.dashboardCard}`}
    >
      <Link href={`/posts/${props.post_id}`}>
        <div className={styles.imageContainer}>
          <img
            src={getPostThumbnail(props.thumbnail_link, props.type)}
            alt="need help pic"
          />
        </div>
      </Link>

      <div className={styles.details}>
        <div className={styles.time}>
          <p>{moment(props.created_at).fromNow()}</p>
        </div>

        <div className={styles.tag}>
          <Link href={`/people_need_help/${props.type}`}>
            {linkFormatToTextFormat(props.type)}
          </Link>
        </div>

        <Link href={`/posts/${props.post_id}`}>
          <h1>
            {props.title.length >= 17
              ? props.title.slice(0, 17) + ".."
              : props.title}
          </h1>
        </Link>

        <div className={styles.adress}>
          <p style={{ textTransform: "capitalize" }}>{props.wilaya}</p>
        </div>

        <p className={styles.desc}>
          {props.description.length > 150
            ? props.description.slice(0, 150) + "..."
            : props.description}
        </p>

        <div className={styles.buttonsContainer}>
          <LikeButton
            postId={props.post_id}
            likesCount={props.likes_count}
            type={props.type}
            subType={props.subType}
            isSearchedPost={props.isSearchedPost}
            isAuthUserPost={props.isAuthUserPost}
            isDashboardPage={props.isDashboardCard}
          />
          <ShareButton
            isDashboardPage={props.isDashboardCard}
            sharesCount={props.shares_count}
            postLink={`${process.env.NEXT_PUBLIC_BASE_FRONT_URL}/posts/${props.post_id}`}
          />
          {/* <button onClick={() => setIsGrid(!isGrid)}>change me</button> */}
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default AdCard;
