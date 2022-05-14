import { counterTypes } from "../types/counter.types";

export const addCounter = () => {
  return {
    type: counterTypes.ADD,
  };
};
