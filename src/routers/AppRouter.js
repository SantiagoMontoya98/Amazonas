import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import ProductsCategory from "../components/ProductsCategory";
import Home from "../containers/Home";
import { GlobalStyles } from "../styles/GlobalStyles";
import ProductsGamers from "../components/ProductsGamers";
import ProductstList from "../components/ProductsList";
import { useState, useEffect } from "react";
import Detalle from "../containers/Detalle";
import Login from "../components/Login";
import Registro from "../components/Registro";
import PoliticaPrivacidad from "../components/PoliticaPrivacidad";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import PublicRoutes from "./PublicRoutes";

const AppRouter = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [userName, setuserName] = useState("");

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setuserName(user.displayName.split(" ")[0]);
        //dispatch(loginEmailPassword(user.uid, user.displayName));
        setisLoggedIn(true);
      } else {
        setisLoggedIn(false);
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home userName={userName} />} />
        <Route path="categoria" element={<ProductsCategory />} />
        <Route path="gamers" element={<ProductsGamers />} />
        <Route path="productos/:id" element={<ProductstList />} />
        <Route path="detalle/:id" element={<Detalle />} />
        <Route path="politica" element={<PoliticaPrivacidad />} />

        <Route
          path="login"
          element={
            <PublicRoutes isAuthenticated={isLoggedIn}>
              <Login />
            </PublicRoutes>
          }
        />

        <Route
          path="registro"
          element={
            <PublicRoutes isAuthenticated={isLoggedIn}>
              <Registro />
            </PublicRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
