import {
  PLAY_BUTTON_CLICK,
  NUMBER_OF_CARDS_SELECTED,
  NUMBER_OF_CARDS_SELECTION_CONFIRMATION,
} from "./actionTypes";

// Function for returning the play button click action
export const playButtonClick = () => {
  return {
    type: PLAY_BUTTON_CLICK,
  };
};

// Function for returning the number of cards selection confirmation
export const numberOfCardsSelectionConfirmation = () => {
  return {
    type: NUMBER_OF_CARDS_SELECTION_CONFIRMATION,
  };
};

// Function for returnning the number of cards selected
export const numberOfCardsSelectedByUser = (numberOfCardsSelectedByUser) => {
  return {
    type: NUMBER_OF_CARDS_SELECTED,
    numberOfCards: numberOfCardsSelectedByUser,
  };
};
