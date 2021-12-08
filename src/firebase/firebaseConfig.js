// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByyjV-yWKzQ8FG03fRxZ-a8TNDoFaj8cQ",
  authDomain: "as-c9b11.firebaseapp.com",
  projectId: "as-c9b11",
  storageBucket: "as-c9b11.appspot.com",
  messagingSenderId: "958611566033",
  appId: "1:958611566033:web:7f0de4d735af6f289604f0",
  measurementId: "G-JS2JLY93NS",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();

export { app, db, google, facebook };
