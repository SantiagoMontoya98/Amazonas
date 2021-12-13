import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { DetalleContainer } from "../styles/DetalleProductStyles";
import CategoriayMas from "./CategoriayMas";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import ReactImageMagnify from "react-image-magnify";

const DetalleProduct = () => {
  const { id } = useParams();

  const navegar = useNavigate();

  const { products } = useSelector((state) => state.products);

  const { regresar } = useSelector((state) => state.products);

  const [product, setProduct] = useState();

  const [cantidad, setCantidad] = useState(1);

  const [img, setImg] = useState("");

  useEffect(() => {
    products.forEach((el) => {
      if (el.path === id) {
        setProduct(el);
        setImg(el?.img1);
      }
    });
  }, []);

  useEffect(() => {
    products.forEach((el) => {
      if (el.path === id) {
        setProduct(el);
        setImg(el?.img1);
      }
    });
  }, [id]);

  const regresarProduct = () => navegar(regresar);

  const createProduct = (product) => {
    addDoc(collection(db, "carrito"), product)
      .then((resp) => {})
      .catch((err) => console.log(err.message));
  };

  const handleChangeCantidad = ({ target }) =>
    setCantidad(Number(target.value));

  const handleChangeImg = ({ target }) => setImg(target.src);

  return (
    <>
      <CategoriayMas
        categoria={product !== undefined ? product.category : ""}
      />
      <DetalleContainer>
        <span className="arrow">‹</span>
        <span className="link" onClick={regresarProduct}>
          Volver a los resultados
        </span>
        <div className="container-main">
          <div className="images">
            <img
              src={product !== undefined ? product.img1 : ""}
              alt={product !== undefined ? product.name : ""}
              className="more-img"
              onClick={handleChangeImg}
            />
            <img
              src={product !== undefined ? product.img2 : ""}
              alt={product !== undefined ? product.name : ""}
              className="more-img"
              onClick={handleChangeImg}
            />
            <img
              src={product !== undefined ? product.img3 : ""}
              alt={product !== undefined ? product.name : ""}
              className="more-img"
              onClick={handleChangeImg}
            />
          </div>

          <div className="product">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: product !== undefined ? product.name : "",
                  isFluidWidth: true,
                  src: img,
                },
                largeImage: {
                  src: img,
                  width: 1200,
                  height: 1800,
                },
                shouldUsePositiveSpaceLens: true,
              }}
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
            <select className="cantidad" onChange={handleChangeCantidad}>
              <option value="1">Cantidad: 1</option>
              <option value="2">Cantidad: 2</option>
              <option value="3">Cantidad: 3</option>
              <option value="4">Cantidad: 4</option>
              <option value="5">Cantidad: 5</option>
              <option value="6">Cantidad: 6</option>
              <option value="7">Cantidad: 7</option>
              <option value="8">Cantidad: 8</option>
              <option value="9">Cantidad: 9</option>
            </select>
            <Link to="/carrito">
              <button
                className="agregar"
                onClick={() =>
                  createProduct({
                    name: product?.name,
                    img: product?.img1,
                    price: product?.price,
                    amount: cantidad,
                    path: product?.path,
                  })
                }
              >
                Agregar al Carrito
              </button>
            </Link>

            <button className="comprar">Comprar ahora</button>
          </div>
        </div>
      </DetalleContainer>
    </>
  );
};

export default DetalleProduct;
