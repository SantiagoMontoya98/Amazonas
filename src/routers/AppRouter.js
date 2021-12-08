import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import ProductsCategory from "../components/ProductsCategory";
import Home from "../containers/Home";
import { GlobalStyles } from "../styles/GlobalStyles";
import ProductsGamers from "../components/ProductsGamers";
import ProductstList from "../components/ProductsList";
import Detalle from "../containers/Detalle";
import Login from "../components/Login";
import Registro from "../components/Registro";
import PoliticaPrivacidad from "../components/PoliticaPrivacidad";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="categoria" element={<ProductsCategory />} />
        <Route path="gamers" element={<ProductsGamers />} />
        <Route path="productos/:id" element={<ProductstList />} />
        <Route path="detalle/:id" element={<Detalle />} />
        <Route path="login" element={<Login />} />
        <Route path="registro" element={<Registro />} />
        <Route path="politica-privacidad" element={<PoliticaPrivacidad />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
