import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// styles
import styles from "../../../styles/dashboard.module.scss";

// redux
import {
  getAuthUserPosts,
  getOldAuthUserPosts,
} from "../../../redux/actions/postsActions";

// components
import Spinner from "../../common/loaders/Spinner";
import AdDashboardCard from "../../common/cards/AdDashboardCard";
import NoAds from "../../common/others/NoAds";

const AdsContainer = () => {
  const {
    authUserPosts: { data, isDataLoaded },
  } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [numOfGroupe, setNumOfGroupe] = useState(2);

  useEffect(() => {
    dispatch(getAuthUserPosts());

    const handleScroll = () => {
      const bodyHeight = document.body.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      const isScrollRichBottom = windowHeight + scrollY >= bodyHeight;

      if (isScrollRichBottom) {
        setNumOfGroupe(numOfGroupe + 1);
        dispatch(getOldAuthUserPosts(numOfGroupe));
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {!isDataLoaded ? (
        <div style={{ height: "70vh", width: "100%" }}>
          <Spinner style={{ fontSize: 12, top: "30vh", color: "#000" }} />
        </div>
      ) : (
        <AdsList ads={data} />
      )}
    </>
  );
};

const AdsList = ({ ads }) => {
  // const [totalAds, setTotalAds] = useState(ads);

  // useEffect(() => {
  //   setTotalAds(ads);
  // }, [ads]);

  return ads.length === 0 ? (
    <NoAds styles={styles} />
  ) : (
    <div className={styles.adsContainer}>
      {ads.map((adInfo, index) => {
        return (
          <AdDashboardCard key={index} {...adInfo} subType={adInfo.type} />
        );
      })}
    </div>
  );
};

export default AdsContainer;
