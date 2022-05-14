import { counterTypes } from "../types/counter.types";

const initialState = {
  value: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case counterTypes.ADD:
      return {
        ...state,
        value: state.value + 1,
      };

    default:
      return state;
  }
};
