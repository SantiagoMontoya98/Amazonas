import { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { ListContainer } from "../styles/ProductsListStyles";
import { useDispatch, useSelector } from "react-redux";
import { getProductsFirebase } from "../redux/actions/actionProducts";
import uuid from "react-uuid";
import Header from "./Header";
import NavBar from "./NavBar";

const ProductsList = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    if (id === "computadores") dispatch(getProductsFirebase(id));
    if (id === "tablets") dispatch(getProductsFirebase(id));
    if (id === "videojuegos") dispatch(getProductsFirebase(id));
    if (id === "auriculares") dispatch(getProductsFirebase(id));
    if (id === "controles") dispatch(getProductsFirebase(id));
    if (id === "sillas") dispatch(getProductsFirebase(id));
    if (id === "teclados") dispatch(getProductsFirebase(id));
    if (id === "ratones") dispatch(getProductsFirebase(id));
    if (id === "oculus") dispatch(getProductsFirebase(id));
    if (id === "electronicos") dispatch(getProductsFirebase(id));
    if (id === "ofertas") dispatch(getProductsFirebase(id));
  }, []);

  useEffect(() => {
    if (id === "computadores") dispatch(getProductsFirebase(id));
    if (id === "tablets") dispatch(getProductsFirebase(id));
    if (id === "videojuegos") dispatch(getProductsFirebase(id));
    if (id === "auriculares") dispatch(getProductsFirebase(id));
    if (id === "controles") dispatch(getProductsFirebase(id));
    if (id === "sillas") dispatch(getProductsFirebase(id));
    if (id === "teclados") dispatch(getProductsFirebase(id));
    if (id === "ratones") dispatch(getProductsFirebase(id));
    if (id === "oculus") dispatch(getProductsFirebase(id));
    if (id === "electronicos") dispatch(getProductsFirebase(id));
    if (id === "ofertas") dispatch(getProductsFirebase(id));
  }, [id]);

  return (
    <>
      <Header />
      <NavBar />
      <ListContainer>
        <h1>Lista de productos</h1>

        <div
          className="product-container"
          style={{ borderTop: "2px solid #ddd" }}
        >
          <Link
            to={products.length !== 0 ? `/detalle/${products[0].path}` : ""}
            className="img-link"
          >
            <img
              src={products.length !== 0 ? products[0].img1 : ""}
              alt={products.length !== 0 ? products[0].name : ""}
            />
          </Link>

          <div className="description-container">
            <Link
              to={products.length !== 0 ? `/detalle/${products[0].path}` : ""}
              className="link"
            >
              <p className="description">
                {products.length !== 0 ? products[0].name : ""}
              </p>
              <p className="price">
                US${products.length !== 0 ? products[0].price : ""}
              </p>
              <p className="send">Envío GRATIS</p>
            </Link>
          </div>
        </div>

        {products.map((product, index) => {
          if (index !== 0) {
            return (
              <div className="product-container" key={uuid()}>
                <Link to={`/detalle/${product.path}`} className="img-link">
                  <img src={product.img1} alt="" />
                </Link>

                <div className="description-container">
                  <Link to={`/detalle/${product.path}`} className="link">
                    <p className="description">{product.name}</p>
                    <p className="price">US${product.price}</p>
                    <p className="send">Envío GRATIS</p>
                  </Link>
                </div>
              </div>
            );
          }
        })}
      </ListContainer>
    </>
  );
};

export default ProductsList;
