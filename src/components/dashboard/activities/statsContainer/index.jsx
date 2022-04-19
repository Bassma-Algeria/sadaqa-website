import axios from "axios";
import React, { useEffect, useState } from "react";

// components
import Spinner from "../../../common/loaders/Spinner";
import CardsContainer from "./CardsContainer";
import GeneralStats from "./GeneralStats";

const StatsContainer = () => {
  const [totals, setTotals] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/posts/getNumOfPostsOfAuthUser")
      .then((res) => {
        setTotals(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {loading ? (
        <div style={{ height: "70vh", width: "100%" }}>
          <Spinner style={{ fontSize: 12, top: "30vh", color: "#000" }} />
        </div>
      ) : (
        <>
          <GeneralStats totals={totals} />
          <CardsContainer totals={totals} />
        </>
      )}
    </>
  );
};
export default StatsContainer;
