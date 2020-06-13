import {
  PLAY_BUTTON_CLICK,
  NUMBER_OF_CARDS_SELECTED,
  NUMBER_OF_CARDS_SELECTION_CONFIRMATION,
  UPDATE_CARD_COUNT,
  RESET_CARD_COUNT,
  HOME_BUTTON_CLICK,
} from "./actionTypes";

const initialState = {
  playButtonClicked: false,
  numberOfCardsSelectedConfirmation: false,
  numberOfCardsSelected: 0,
  currentCountValue: 0,
};

export const reducerFunction = (state = initialState, action) => {
  switch (action.type) {
    //   For play button
    case PLAY_BUTTON_CLICK:
      if (!state.playButtonClicked) {
        return {
          ...state,
          playButtonClicked: true,
        };
      } else {
        return {
          ...state,
          playButtonClicked: false,
        };
      }

    // For number of cards selection confirmation
    case NUMBER_OF_CARDS_SELECTION_CONFIRMATION:
      if (!state.numberOfCardsSelectedConfirmation) {
        return {
          ...state,
          numberOfCardsSelectedConfirmation: true,
        };
      } else {
        return {
          ...state,
          numberOfCardsSelectedConfirmation: false,
        };
      }

    // For numbers of cards selected
    case NUMBER_OF_CARDS_SELECTED:
      if (action.numberOfCards === 2) {
        return {
          ...state,
          numberOfCardsSelected: action.numberOfCards,
          numberOfCardsSelectedConfirmation: true,
          currentCountValue: 2,
        };
      } else if (action.numberOfCards === 4) {
        return {
          ...state,
          numberOfCardsSelected: action.numberOfCards,
          numberOfCardsSelectedConfirmation: true,
          currentCountValue: 2,
        };
      } else {
        return {
          ...state,
          numberOfCardsSelected: action.numberOfCards,
          numberOfCardsSelectedConfirmation: true,
          currentCountValue: 4,
        };
      }

    // For updating the current card counnt
    case UPDATE_CARD_COUNT:
      return {
        ...state,
        currentCountValue: state.currentCountValue + action.currentCount,
      };

    // For reseting the card count
    case RESET_CARD_COUNT:
      return {
        ...state,
        currentCountValue: action.baseVal,
      };

    // For handling the home button click
    case HOME_BUTTON_CLICK:
      return {
        ...state,
        playButtonClicked: false,
        numberOfCardsSelectedConfirmation: false,
        numberOfCardsSelected: 0,
        currentCountValue: 0,
      };

    default:
      return state;
  }
};
