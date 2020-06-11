import React from "react";
import style from "./HomePage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IntroDivComponent from "../../components/intro-div/IntroDiv";
import HeadingDiv from "../../components/heading-div/HeadingDiv";

const HomePage = (props) => {
  return (
    <>
      <div className={style["main-div"]}>
        <HeadingDiv />
        {/* Intro Div */}
        <div className={style["intro-div-component"]}>
          <IntroDivComponent />
        </div>
        {/* Intro Div */}
      </div>
    </>
  );
};

export default HomePage;
