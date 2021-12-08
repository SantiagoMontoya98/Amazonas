import DetalleProduct from "../components/DetalleProduct";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import RelatedProducts from "../components/RelatedProducts";

const Detalle = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <DetalleProduct />
      <RelatedProducts />
    </div>
  );
};

export default Detalle;
