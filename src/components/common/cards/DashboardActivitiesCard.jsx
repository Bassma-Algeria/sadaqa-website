import React, { useRef } from "react";
import { ReactSVG } from "react-svg";

// styles
import styles from "../../../styles/dashboard.module.scss";

// components
import CircularePercentage from "../others/CircularePercentage";

const DashboardActivitiesCard = ({
  iconLink,
  title,
  numOfActivePosts,
  totalNumOfPosts,
}) => {
  const containerRef = useRef(null);
  const cardProperties = getCardProperties(title);
  const percentage = getPercentage(totalNumOfPosts, numOfActivePosts);

  return (
    <div className={styles.cardContainer} ref={containerRef}>
      <div className={styles.cardDetails}>
        <ReactSVG src={iconLink} className={styles.iconContainer} />
        <h1>{title}</h1>
        <p>
          You still have
          <br />
          {numOfActivePosts} {title.toLowerCase()} not {cardProperties.status}{" "}
          yet
        </p>
      </div>
      <div className={styles.circularPercentageContainer}>
        <CircularePercentage
          percentage={percentage}
          color={cardProperties.color}
          circleText={cardProperties.status}
          containerRef={containerRef}
        />
      </div>
    </div>
  );
};

const getCardProperties = (title) => {
  switch (title) {
    case "Donations":
      return {
        status: "given",
        color: "#FFC850",
      };
      break;

    case "Donation Requests":
      return {
        status: "goten",
        color: "#FF7B79",
      };
      break;

    case "Families In Need":
      return {
        status: "got help",
        color: "#00AAF0",
      };

    default:
      return {
        status: "got help",
        color: "#FDB0A0",
      };
      break;
  }
};

const getPercentage = (total, partOfTotal) => {
  if (total === 0) {
    return 0;
  }

  const percentage = Math.round(((total - partOfTotal) / total) * 100);
  return percentage;
};

export default DashboardActivitiesCard;
