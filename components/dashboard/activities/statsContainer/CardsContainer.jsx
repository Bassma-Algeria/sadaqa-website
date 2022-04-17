import React from "react";
import { useSelector } from "react-redux";

// styles
import styles from "../../../../styles/dashboard.module.scss";

// helpers
import { ACTIVITIES_DATA } from "../../../../data/dashboard";
import { getTotalsForTargetType } from "../../../../utils/dashboardHelpers";

// components
import DashboardActivitiesCard from "../../../common/cards/DashboardActivitiesCard";
import { Container } from "../../../common/containers/Container";

const CardsContainer = ({ totals }) => {
  const {
    profileInfo: {
      generalInfo: { role },
    },
  } = useSelector((state) => state.authUser);

  return (
    <Container style={{ paddingBottom: 0 }}>
      <div className={styles.cardsContainer}>
        {ACTIVITIES_DATA.map((element, index) => {
          if (role !== "association" && index <= 1) return;

          const numOfPosts = getTotalsForTargetType(totals, element.name);
          return (
            <DashboardActivitiesCard
              key={index}
              iconLink={element.icon}
              totalNumOfPosts={numOfPosts.total}
              numOfActivePosts={numOfPosts.active}
              title={element.name}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default CardsContainer;
