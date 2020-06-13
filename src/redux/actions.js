import {
  PLAY_BUTTON_CLICK,
  NUMBER_OF_CARDS_SELECTED,
  NUMBER_OF_CARDS_SELECTION_CONFIRMATION,
  RESTART_ACTION,
  SHOW_COUNT,
  ROLL_CARDS,
  UPDATE_CARD_COUNT,
  RESET_CARD_COUNT
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

// Function for returning restart action
export const restartAction = () => {
  return {
    type: RESTART_ACTION,
  };
};

// Function for returning the show count action
export const showCount = () => {
  return {
    type: SHOW_COUNT,
  };
};

// Function for returning the roll cards action
export const rollCards = () => {
  return {
    type: ROLL_CARDS,
  };
};

// Function for returning the card count update action
export const updateCardCount = (currentCountValue) => {
  return {
    type: UPDATE_CARD_COUNT,
    currentCount: currentCountValue
  };
};

// Function for reseting the card count value
export const resetCardCountValue = (cardCountBaseValue) => {
    return {
        type: RESET_CARD_COUNT,
        baseVal: cardCountBaseValue
    }
}
