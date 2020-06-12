import {
  PLAY_BUTTON_CLICK,
  NUMBER_OF_CARDS_SELECTED,
  NUMBER_OF_CARDS_SELECTION_CONFIRMATION,
} from "./actionTypes";

const initialState = {
  playButtonClicked: false,
  numberOfCardsSelectedConfirmation: false,
  numberOfCardsSelected: 0,
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
      return {
        ...state,
        numberOfCardsSelected: action.numberOfCards,
        numberOfCardsSelectedConfirmation: true,
      };

    default:
      return state;
  }
};
