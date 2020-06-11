import React from "react";
import style from "./HomePage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faCircle } from "@fortawesome/free-solid-svg-icons";
import IntroDivComponent from "../../components/intro-div/IntroDiv";

const HomePage = (props) => {
  return (
    <>
      {/* Modal */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Info
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className={style["card-counting-strategy"]}>
                <div className={style["heading"]}>
                  Hi-Lo Card Counting Technique
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
                  Cards: 10s Aces Kings Queens Jacks have a value of +1
                </div>
                <div className={style["third"]}>
                  <i>
                    <FontAwesomeIcon icon={faCircle} />
                  </i>{" "}
                  Cards: 7s 8s 9s have a value of 0
                </div>
                <div className={style["fourth"]}>
                  <i>
                    <FontAwesomeIcon icon={faCircle} />
                  </i>{" "}
                  Cards: 2s 3s 4s 5s 6s have a value of -1
                </div>
                <div className={style["fifth"]}>
                  <i>
                    <FontAwesomeIcon icon={faCircle} />
                  </i>{" "}
                  The count is a total of these values at the end.
                </div>
              </div>
              <div className={style["instructions"]}>
                <div className={style["heading"]}>Game Instrunctions</div>
                <div className={style["content"]}>
                  Click multiple times on the Roll Cards button to draw new
                  cards and when ready tally your count with the Show Count
                  button.
                </div>
              </div>
            </div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <div className={style["main-div"]}>
        <div className={style["heading-div"]}>
          CARD COUNTER{" "}
          <i type="button" data-toggle="modal" data-target="#exampleModal">
            <FontAwesomeIcon icon={faInfoCircle} />
          </i>
        </div>
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
