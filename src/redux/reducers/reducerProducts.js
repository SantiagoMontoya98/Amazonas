import { types } from "../types/types";

const initialState = {
  products: [],
  regresar: "",
  allProducts: [],
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

    case types.allProducts:
      return {
        ...state,
        allProducts: [...state.allProducts, action.payload],
      };

    default:
      return state;
  }
};
