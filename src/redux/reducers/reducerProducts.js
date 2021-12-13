import { types } from "../types/types";

const initialState = {
  products: [],
  regresar: "",
};

export const reducerProducts = (state = initialState, action) => {
  switch (action.type) {
    case types.obtener:
      return {
        ...state,
        products: action.payload,
      };

    case types.regresar:
      return {
        ...state,
        regresar: action.payload,
      };

    default:
      return state;
  }
};
