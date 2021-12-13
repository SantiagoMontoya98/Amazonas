import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "../styles/GlobalStyles";
import { useEffect } from "react";
import Login from "../components/Login";
import Registro from "../components/Registro";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import PublicRoutes from "./PublicRoutes";
import CreateProduct from "../components/CreateProduct";
import FormProducts from "../components/FormProducts";
import { useDispatch } from "react-redux";
import { loginSync, logoutSync } from "../redux/actions/actionLogin";
import PrivateRoutes from "./PrivateRoutes";
import AnotherRoutes from "./AnotherRoutes";
import Compra from "../components/Compra";

const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(loginSync(user.uid, user.displayName));
      } else {
        dispatch(logoutSync());
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="*" element={<AnotherRoutes />} />

        <Route
          path="login"
          element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          }
        />

        <Route
          path="registro"
          element={
            <PublicRoutes>
              <Registro />
            </PublicRoutes>
          }
        />

        <Route
          path="compra"
          element={
            <PrivateRoutes>
              <Compra />
            </PrivateRoutes>
          }
        />

        <Route
          path="crear-producto"
          element={
            <PrivateRoutes>
              <CreateProduct />
            </PrivateRoutes>
          }
        />

        <Route
          path="form-productos"
          element={
            <PrivateRoutes>
              <FormProducts />
            </PrivateRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
