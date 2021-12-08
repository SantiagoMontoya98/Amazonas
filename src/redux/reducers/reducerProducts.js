import { types } from "../types/types";

const initialState = {
  products: [],
};

export const reducerProducts = (state = initialState, action) => {
  switch (action.type) {
    case types.obtener:
      return {
        products: action.payload,
      };

    default:
      return state;
  }
};
