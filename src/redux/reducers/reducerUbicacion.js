import { types } from "../types/types";

export const reducerUbicacion = (state = "", action) => {
  switch (action.type) {
    case types.ubicacion:
      return (state = action.payload);

    default:
      return state;
  }
};
