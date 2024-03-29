import { types } from "../types/types";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { google, facebook } from "../../firebase/firebaseConfig";

export const loginSync = (id, name) => {
  return {
    type: types.login,
    payload: {
      id,
      name,
    },
  };
};

export const loginEmailPassword = (email, password) => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(loginSync(user.uid, user.displayName));
        //console.log("Bienvenid@ " + user.displayName);
        return "Hola";
      })
      .catch((e) => {
        //console.log("El usuario no existe");
        return e;
      });
  };
};

export const loginGoogle = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, google)
      .then(({ user }) => {
        console.log(user);
        dispatch(loginSync(user.uid, user.displayName));
        console.log(`Bienvenid@ ${user.displayName}`);
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const loginFacebook = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, facebook)
      .then(({ user }) => {
        console.log(user);
        console.log(`Bienvenid@ ${user.displayName}`);
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const logoutAsync = () => {
  return (dispatch) => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(logoutSync());
      })
      .catch((err) => console.log(err.message));
  };
};

export const logoutSync = () => {
  return {
    type: types.logout,
  };
};
