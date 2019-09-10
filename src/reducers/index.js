import * as actions from "../constants/actions";

export const initialState = {
  value: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return { ...state, value: state.value + action.payload.value }
    case actions.DECREMENT:
      return { ...state, value: state.value - 1 }
    default:
      return state;
  }
};
