import React from "react";
import style from "./NumberOfCardsSelection.module.scss";
import { useDispatch } from "react-redux";
import { numberOfCardsSelectedByUser } from "../../redux/actions";

const NumberOfCardsSelectionComponent = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={style["main-div"]}>
        <div className={style["instructions"]}>
          Please select the number of cards you would like to have in a single
          roll:
        </div>
        <div className={style["options"]}>
          <button
            type="button"
            className="btn btn-dark"
            id={style["first"]}
            onClick={() => {
              dispatch(numberOfCardsSelectedByUser(2));
            }}
          >
            2
          </button>

          <button
            type="button"
            className="btn btn-dark"
            id={style["second"]}
            onClick={() => {
              dispatch(numberOfCardsSelectedByUser(4));
            }}
          >
            4
          </button>
          <button
            type="button"
            className="btn btn-dark"
            id={style["second"]}
            onClick={() => {
              dispatch(numberOfCardsSelectedByUser(6));
            }}
          >
            6
          </button>
        </div>
      </div>
    </>
  );
};

export default NumberOfCardsSelectionComponent;
