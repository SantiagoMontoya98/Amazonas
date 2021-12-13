import { Routes, Route } from "react-router-dom";
import ProductsCategory from "../components/ProductsCategory";
import Home from "../containers/Home";
import ProductsGamers from "../components/ProductsGamers";
import ProductstList from "../components/ProductsList";
import Detalle from "../containers/Detalle";
import PoliticaPrivacidad from "../components/PoliticaPrivacidad";
import Carrito from "../components/Carrito";
import Compra from "../components/Compra";

const AnotherRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="categoria" element={<ProductsCategory />} />
      <Route path="gamers" element={<ProductsGamers />} />
      <Route path="productos/:id" element={<ProductstList />} />
      <Route path="detalle/:id" element={<Detalle />} />
      <Route path="politica" element={<PoliticaPrivacidad />} />
      <Route path="carrito" element={<Carrito />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AnotherRoutes;
