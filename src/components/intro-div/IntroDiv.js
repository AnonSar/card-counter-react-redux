import React from "react";
import style from "./IntroDiv.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { playButtonClick } from "../../redux/actions";

const IntroDivComponent = (props) => {

  const dispatch = useDispatch();
  return (
    <>
      <div className={style["info-div"]}>
        <div className={style["first"]}>
          Hi there, this website will help you in practising card counting and
          developing quick calculations skills for maintaining the current
          count.
        </div>
        <div className={style["second"]}>
          The method that has been used for calculating count is based on the
          Hi-Lo card counting technique.
        </div>
        <div className={style["third"]}>
          For more info on Hi-Lo technique click on the{" "}
          <FontAwesomeIcon icon={faInfoCircle} /> button.
        </div>
      </div>
      <div className={style["play-button-div"]}>
        <button
          type="button"
          className="btn btn-outline-dark"
          id={style["play-button"]}
          onClick={() => {
            dispatch(playButtonClick())
          }}
        >
          Play
        </button>
      </div>
    </>
  );
};

export default IntroDivComponent;
