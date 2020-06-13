import React from "react";
import style from "./HeadingDiv.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux"
import { homeButtonClick } from "../../redux/actions";
import { faCircle, faInfoCircle, faHome } from "@fortawesome/free-solid-svg-icons";

const HeadingComponent = (props) => {

  const dispatch = useDispatch();

  return (
    <>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                id="exampleModalLabel"
                style={{ fontSize: "2rem" }}
              >
                Info
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className={style["card-counting-strategy"]}>
                <div className={style["heading"]}>
                  <u>Hi-Lo Card Counting Technique</u>
                </div>
                <div className={style["first"]}>
                  <i>
                    <FontAwesomeIcon icon={faCircle} />
                  </i>{" "}
                  Hi-Lo is a counting strategy according to which the cards are
                  assigned an integer value of -1, 0 or +1.
                </div>
                <div className={style["second"]}>
                  <i>
                    <FontAwesomeIcon icon={faCircle} />
                  </i>{" "}
                  <strong>Cards:</strong> 10s Aces Kings Queens Jacks have a
                  value of -1
                </div>
                <div className={style["third"]}>
                  <i>
                    <FontAwesomeIcon icon={faCircle} />
                  </i>{" "}
                  <strong>Cards:</strong> 7s 8s 9s have a value of 0
                </div>
                <div className={style["fourth"]}>
                  <i>
                    <FontAwesomeIcon icon={faCircle} />
                  </i>{" "}
                  <strong>Cards:</strong> 2s 3s 4s 5s 6s have a value of +1
                </div>
                <div className={style["fifth"]}>
                  <i>
                    <FontAwesomeIcon icon={faCircle} />
                  </i>{" "}
                  The count is a total of these values at the end.
                </div>
              </div>
              <div className={style["instructions"]}>
                <div className={style["heading"]}>
                  <u>Game Instrunctions</u>
                </div>
                <div className={style["content"]}>
                  Click multiple times on the Roll Cards button to draw new
                  cards and when ready tally your count with the Show Count
                  button.
                </div>
              </div>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
      {/* Modal */}
      {/* Heading Component */}
      <div className={style["heading-div"]}>
        <i id={style["home-icon"]}><FontAwesomeIcon icon={faHome} onClick={()=>{dispatch(homeButtonClick())}} /></i>
        CARD COUNTER{" "}
        <i type="button" data-toggle="modal" data-target="#exampleModal" id={style["info-icon"]}>
          <FontAwesomeIcon icon={faInfoCircle} />
        </i>
      </div>
      {/* Heading Component */}
    </>
  );
};

export default HeadingComponent;
