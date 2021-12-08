import { types } from "../types/types";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const getProducts = (products) => {
  return {
    type: types.obtener,
    payload: products,
  };
};

export const getProductsFirebase = (table) => {
  return async (dispatch) => {
    let docRef = collection(db, table);
    let getData = await getDocs(docRef);

    const products = [];

    getData.forEach((doc) => {
      //console.log(doc.data());
      products.push(doc.data());
    });

    dispatch(getProducts(products));
  };
};