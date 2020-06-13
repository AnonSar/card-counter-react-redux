import React from "react";
import style from "./HomePage.module.scss";
import IntroDivComponent from "../../components/intro-div/IntroDiv";
import HeadingDiv from "../../components/heading-div/HeadingDiv";
import NumberOfCardsSelectionComponent from "../../components/number-of-cards-selection/NumberOfCardsSelection";
import CardRollingSection from "../../components/card-rolling-section/CardRollingSection";
import { useSelector } from "react-redux";

const HomePage = (props) => {
  const playButtonState = useSelector((state) => {
    return state.playButtonClicked;
  });
  const numberOfCardsSelectedConfirmation = useSelector((state) => {
    return state.numberOfCardsSelectedConfirmation;
  });
  return (
    <>
      <div className={style["main-div"]}>
        {/* Heading Div */}
        <HeadingDiv />
        {/* Heading Div */}
        {/* Intro Div */}
        {!playButtonState && (
          <div className={style["intro-div-component"]}>
            <IntroDivComponent />
          </div>
        )}
        {/* Intro Div */}
        {/* Number of Card To Be Rolled Selection Div */}
        {playButtonState && !numberOfCardsSelectedConfirmation && (
          <div className={style["number-of-cards-div"]}>
            <NumberOfCardsSelectionComponent />
          </div>
        )}
        {/* Number of Card To Be Rolled Selection Div */}
        {/* Card Rolling Section */}
        {playButtonState && numberOfCardsSelectedConfirmation && (
          <div>
            <CardRollingSection />
          </div>
        )}
        {/* Card Rolling Section */}
      </div>
    </>
  );
};

export default HomePage;
