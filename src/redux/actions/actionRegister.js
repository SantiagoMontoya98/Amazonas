import { types } from "../types/types";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "@firebase/auth";

const registerSync = (name, email) => {
  return {
    type: types.registro,
    payload: {
      name,
      email,
    },
  };
};

export const registerAsync = (name, email, password) => {
  return (dispatch) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        //console.log(user);

        await updateProfile(auth.currentUser, { displayName: name });

        dispatch(registerSync(user.displayName, user.email));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};
