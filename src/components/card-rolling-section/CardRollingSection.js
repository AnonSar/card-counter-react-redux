import React, { useState } from "react";
import style from "./CardRollingSection.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { updateCardCount } from "../../redux/actions";

const CardRollingSectionComponent = () => {
  const dispatch = useDispatch();
  let startingSetOfCards = [];

  const currentCount = useSelector((state) => {
    return state.currentCountValue;
  });

  //   const numberOfCardsRolled = useSelector((state) => {
  //     return state.numberOfCardsRolled;
  //   });

  const numberOfCardsSelected = useSelector((state) => {
    return state.numberOfCardsSelected;
  });

  // Function for calculating the current roll value
  const calculateCurrentCount = (cardIndexList) => {
    let currentRollValue = 0;
    for (let i = 0; i < cardIndexList.length; i++) {
      const currentCardFirstCharacterValue = cardIndexList[i][0];
      if (
        2 <= currentCardFirstCharacterValue &&
        currentCardFirstCharacterValue <= 6
      ) {
        currentRollValue++;
      } else if (
        7 <= currentCardFirstCharacterValue &&
        currentCardFirstCharacterValue <= 9
      ) {
        continue;
      } else {
        currentRollValue--;
      }
    }

    return currentRollValue;
  };

  // Function for generating the card index
  const generateCardIndexList = () => {
    const firstCharacterList = [
      `2`,
      `3`,
      `4`,
      `5`,
      `6`,
      `7`,
      `8`,
      `9`,
      `10`,
      `J`,
      `K`,
      `Q`,
      `A`,
    ];
    const secondCharacterList = [`C`, `D`, `H`, `S`];
    let result = [];
    for (let i = 0; i < numberOfCardsSelected; i++) {
      result.push(
        firstCharacterList[
          Math.floor(Math.random() * firstCharacterList.length)
        ].concat(
          secondCharacterList[
            Math.floor(Math.random() * secondCharacterList.length)
          ]
        )
      );
    }
    dispatch(updateCardCount(calculateCurrentCount(result)));
    return result;
  };

  // Function for generate the img elements of the cards
  const generateCardsImgElement = (cardIndexList) => {
    return cardIndexList.map((cardIndex, i) => {
      return (
        <img
          className="card"
          src={require(`../../assets/cardCollection/cards/${cardIndex}.svg`)}
          alt="card"
          key={i}
        />
      );
    });
  };

  // Function for handling the change in the user input
  const handleChange = (event) => {
    updateUserCountCalculationInput(event.target.value);
    updateUserInputError(false);
  };

  // Function for handling the submit button click
  const handleSubmitButtonClick = () => {
    if (userCountCalculationInput.length !== 0) {
      let userAnswer = parseInt(userCountCalculationInput);
      updateShowUserResult(true);
      if (userAnswer === currentCount) {
        updateUserInputCheckFlag(true);
      } else {
        updateUserInputCheckFlag(false);
      }
    } else {
      updateUserInputError(true);
    }
  };

  if (numberOfCardsSelected === 2) {
    startingSetOfCards = [`3D`, `5S`];
  } else if (numberOfCardsSelected === 4) {
    startingSetOfCards = [`2C`, `4S`, `7S`, `9D`];
  } else {
    startingSetOfCards = [`2C`, `4S`, `7S`, `9D`, `5H`, `6C`];
  }

  // Function for activating the card generation
  const [cardList, generateCards] = useState(
    generateCardsImgElement(startingSetOfCards)
  );

  // Function for showing the number of cards that has been rolled
  const [numberOfCardsRolled, updateNumberOfCardsRolled] = useState(
    numberOfCardsSelected
  );

  // Function for holding the user input related error
  const [userInputError, updateUserInputError] = useState(false);

  // Function for holding the user input check flag
  const [userInputCheckFlag, updateUserInputCheckFlag] = useState();

  // Function for holding the user input for the current count
  const [
    userCountCalculationInput,
    updateUserCountCalculationInput,
  ] = useState();

  // Function for holding the flag that will be used for checking whether to show the user input or not
  const [showUserResult, updateShowUserResult] = useState(false);

  return (
    <>
      {/* Modal for the user input to check their answer against the current count */}
      <div
        class="modal fade"
        id="currentCountCheckModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                <strong>Check Count</strong>
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div
                className={style["instruction"]}
                style={{ textAlign: "left" }}
              >
                Please enter your estimate for the current count:
              </div>
              <div className={style["user-input"]}>
                <div class="input-group mb-3">
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    style={{
                      marginTop: "1rem",
                      backgroundImage: `linear-gradient(0deg, black 2px, rgba(0, 150, 136, 0) 0),
                    linear-gradient(0deg, rgba(0, 0, 0, 0.26) 1px, transparent 0)`,
                    }}
                    onChange={handleChange}
                  />
                </div>
                {userInputError === true && (
                  <div className={style["user-input-error-div"]}>
                    <div className={style["heading"]}>Error</div>
                    <div className={style["content"]}>
                      Please check the input you have entered.
                    </div>
                  </div>
                )}
                {showUserResult && (
                  <div className={style["user-input-result"]}>
                    {userInputCheckFlag ? (
                      <div>
                        <div
                          className={style["heading"]}
                          style={{ color: "green" }}
                        >
                          Success
                        </div>
                        <div className={style["content"]}>
                          Congratulations! Your estimate for the current count
                          is correct. Please click restart, to start a new
                          round.
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div
                          className={style["heading"]}
                          style={{ color: "red" }}
                        >
                          Failure
                        </div>
                        <div className={style["content"]}>
                          Your estimate is wrong, the current count is{" "}
                          {currentCount}. Please click restart, to start a new
                          round.
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-dark"
                onClick={() => {
                  handleSubmitButtonClick();
                }}
              >
                Check
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal for the user input to check their answer against the current count */}

      <div className={style["main-div"]}>
        <div className={style["cards-section"]}>{cardList}</div>
        <div className={style["info-section"]}>
          <div className={style["info"]}>
            <span>Total Number of Cards Rolled: {numberOfCardsRolled}</span>
          </div>
        </div>
        <div className={style["button-section"]}>
          <button
            type="button"
            className="btn btn-dark"
            id={style["button"]}
            onClick={() => {
              generateCards(generateCardsImgElement(generateCardIndexList()));
              updateNumberOfCardsRolled(
                numberOfCardsRolled + numberOfCardsSelected
              );
            }}
          >
            Roll Cards
          </button>
          {/* <button
            type="button"
            className="btn btn-dark"
            id={style["button"]}
            onClick={() => {
              updateCardCountDisplay(currentCount);
            }}
          >
            Show Count
          </button> */}
          <button
            type="button"
            className="btn btn-dark"
            id={style["button"]}
            data-toggle="modal"
            data-target="#currentCountCheckModal"
          >
            Check Count
          </button>
          <button type="button" className="btn btn-dark" id={style["button"]}>
            Restart
          </button>
        </div>
      </div>
    </>
  );
};

export default CardRollingSectionComponent;
