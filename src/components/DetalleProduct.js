import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { DetalleContainer } from "../styles/DetalleProductStyles";
import CategoriayMas from "./CategoriayMas";

const DetalleProduct = () => {
  const { id } = useParams();

  const navegar = useNavigate();

  const { products } = useSelector((state) => state.products);

  const [product, setProduct] = useState();

  useEffect(() => {
    products.forEach((el) => {
      if (el.path === id) setProduct(el);
    });
  }, []);

  useEffect(() => {
    products.forEach((el) => {
      if (el.path === id) setProduct(el);
    });
  }, [id]);

  const regresar = () => navegar(-1);

  return (
    <>
      <CategoriayMas
        categoria={product !== undefined ? product.category : ""}
      />
      <DetalleContainer>
        <span className="arrow">‹</span>
        <span className="link" onClick={regresar}>
          Volver a los resultados
        </span>
        <div className="container-main">
          <div className="images">
            <img
              src={product !== undefined ? product.img1 : ""}
              alt={product !== undefined ? product.name : ""}
              className="more-img"
            />
            <img
              src={product !== undefined ? product.img2 : ""}
              alt={product !== undefined ? product.name : ""}
              className="more-img"
            />
            <img
              src={product !== undefined ? product.img3 : ""}
              alt={product !== undefined ? product.name : ""}
              className="more-img"
            />
          </div>

          <div className="product">
            <img
              src={product !== undefined ? product.img1 : ""}
              alt={product !== undefined ? product.name : ""}
              className="img"
            />
          </div>

          <div className="description">
            <div className="name-container">
              <p className="name">
                {product !== undefined ? product.name : ""}
              </p>
            </div>

            <div className="price-container">
              <span>Precio: </span>
              <span className="price">
                US${product !== undefined ? product.price : ""}
              </span>
              <span> &amp;</span>
              <span className="send"> Envío Gratis.</span>
            </div>

            <div className="about">
              <p className="about-title">Sobre este artículo</p>
              <ul>
                <li>{product !== undefined ? product.desc1 : ""}</li>
                <li>{product !== undefined ? product.desc2 : ""}</li>
                <li>{product !== undefined ? product.desc3 : ""}</li>
                <li>{product !== undefined ? product.desc4 : ""}</li>
                <li>{product !== undefined ? product.desc5 : ""}</li>
              </ul>
            </div>
          </div>

          <div className="buy">
            <p className="price">
              US${product !== undefined ? product.price : ""}
            </p>
            <p className="send">Envío Gratis</p>
            <select className="cantidad">
              <option>Cantidad: 1</option>
              <option>Cantidad: 2</option>
            </select>
            <button className="agregar">Agregar al Carrito</button>
            <button className="comprar">Comprar ahora</button>
          </div>
        </div>
      </DetalleContainer>
    </>
  );
};

export default DetalleProduct;
