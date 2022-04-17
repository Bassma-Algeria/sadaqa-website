import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Slider from "react-slick";

// styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/home.module.scss";

// helpers
import { isCreationAdPage } from "../../utils/homeHelpers";
import { heroSliderSettings } from "../../utils/slidersSettings";
import { heroData } from "../../data/heroData";

// components
import Button from "../common/buttons/Button";
import { HeroContainer } from "../common/containers/Container";

const Hero = ({ setIsPopupOpen }) => {
  return (
    <HeroContainer>
      <Slider {...heroSliderSettings} className="home_slider_container">
        {heroData.map((element, index) => {
          return (
            <HeroContent
              key={index}
              {...element}
              setIsPopupOpen={setIsPopupOpen}
            />
          );
        })}
      </Slider>
    </HeroContainer>
  );
};

const HeroContent = ({
  title,
  desc,
  btnLink,
  btnText,
  imageUrl,
  imageAlt,
  reverse,
  setIsPopupOpen,
}) => {
  const { isAuthenticated } = useSelector((state) => state.authUser);

  const router = useRouter();

  const handleButtonClick = (link) => {
    router.prefetch(link);

    if (!isAuthenticated && isCreationAdPage(link)) {
      setIsPopupOpen(true);
      return;
    }

    router.push(link);
  };

  return (
    <div
      className={styles.hero}
      style={{ flexDirection: reverse && "row-reverse" }}
    >
      <div
        className={styles.content}
        style={{ padding: reverse ? "0" : "0 0 0 100px" }}
      >
        <h1>{title}</h1>
        <p>{desc}</p>

        <Button primary size="lg" onClick={() => handleButtonClick(btnLink)}>
          {btnText}
        </Button>
      </div>

      <div className={styles.image}>
        <div
          className={styles.imgContainer}
          style={{ justifyContent: reverse ? "flex-end" : "flex-start" }}
        >
          <img src={imageUrl} alt={imageAlt} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
