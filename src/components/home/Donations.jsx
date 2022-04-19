import React from "react";
import Link from "next/link";

// helpers
import { donationsCategories } from "../../data/navbarData";

// components
import { Header } from "../common/others/Headers";
import DonationsSubType from "../donations/DonationsSubType";

const Donations = () => {
  return (
    <>
      <Header style={{ padding: "70px 0 30px 0" }}>Donations</Header>
      {donationsCategories.map((category, index) => {
        return (
          <DonationsSubType
            subType={category.title}
            key={index}
            numOfPostsToShow={6}
          />
        );
      })}
    </>
  );
};

export default Donations;
