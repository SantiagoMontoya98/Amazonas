import { types } from "../types/types";

export const getUbicacion2 = (ubicacion) => {
  return {
    type: types.ubicacion,
    payload: ubicacion,
  };
};
