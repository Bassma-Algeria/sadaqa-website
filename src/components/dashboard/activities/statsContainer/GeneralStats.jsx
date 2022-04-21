import React from 'react';
import { useSelector } from 'react-redux';
import { ReactSVG } from 'react-svg';

// styles
import styles from '../../../../styles/dashboard.module.scss';

// icons
import postIcon from '../../../../../public/svg/all_ads_dashboard_icon.svg';

// helpers
import { ACTIVITIES_DATA } from '../../../../data/dashboard';
import { getTotalsForTargetType } from '../../../../utils/dashboardHelpers';

// components
import { Container } from '../../../common/containers/Container';

const GeneralStats = ({ totals }) => {
  return (
    <div className={styles.totals}>
      <Container className={styles.container}>
        <LeftSide totals={totals} />
        <div className={styles.devider}></div>
        <RightSide totals={totals} />
      </Container>
    </div>
  );
};

const LeftSide = ({ totals }) => {
  return (
    <div className={styles.leftSide}>
      <ReactSVG className={styles.postIcon} src={postIcon.src} />
      <div>
        <p>Total Ads</p>
        <h1>{totals.totalNumOfPosts}</h1>
      </div>
    </div>
  );
};

const RightSide = ({ totals }) => {
  const {
    profileInfo: {
      generalInfo: { role },
    },
  } = useSelector(state => state.authUser);

  return (
    <div className={styles.rightSide}>
      {ACTIVITIES_DATA.map((element, index) => {
        if (role !== 'association' && index <= 1) return;

        return (
          <RightSideElement
            key={index}
            numOfPosts={getTotalsForTargetType(totals, element.name)}
            element={element}
          />
        );
      })}
    </div>
  );
};

const RightSideElement = ({ numOfPosts, element }) => {
  return (
    <div className={styles.totalNumOfAdsOfTypeContainer}>
      <ReactSVG className={styles.iconContainer} src={element.icon} />
      <p>
        {numOfPosts.total} {element.name}
      </p>
    </div>
  );
};

export default GeneralStats;
