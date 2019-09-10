import * as actions from "../constants/actions";

export const Increment = (value) => ({
  type: actions.INCREMENT,
  payload: {
    value
  },
});

export const Decrement = () => ({
  type: actions.DECREMENT,
});
