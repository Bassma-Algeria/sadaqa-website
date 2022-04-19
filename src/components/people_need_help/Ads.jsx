import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// styles
import styles from "../../styles/adsPages.module.scss";

// redux
import {
  getPeopleNeedHelpData,
  getTotalNumOfPostsOfType,
} from "../../redux/actions/postsActions";

// components
import AdCard from "../common/cards/AdCard";
import Spinner from "../common/loaders/Spinner";
import PageIndexes from "../common/others/PageIndexes";
import NoAds from "../common/others/NoAds";

const Ads = ({ type }) => {
  const {
    totalNumOfPostsOfType,
    peopleNeedHelp: {
      [type]: { isDataLoaded, data },
    },
  } = useSelector((state) => state.posts);

  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotalNumOfPostsOfType(type));
    dispatch(getPeopleNeedHelpData(type, currentPage, 20));
  }, [type]);

  return (
    <>
      {!isDataLoaded ? (
        <div style={{ height: "70vh", width: "100%" }}>
          <Spinner style={{ fontSize: 12, top: "20vh", color: "#000" }} />
        </div>
      ) : data.length === 0 ? (
        <div style={{ minHeight: "60vh" }}>
          <NoAds styles={styles} />
        </div>
      ) : (
        <div style={{ minHeight: "70vh" }}>
          <div className={`flex flex-wrap`} style={{ gap: "2%" }}>
            {data.map((element, index) => {
              return <AdCard key={index} {...element} subType={type} />;
            })}
          </div>

          <PageIndexes
            totalNumOfPosts={totalNumOfPostsOfType}
            totalNumOfPostsPerPage={20}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </>
  );
};

export default Ads;
