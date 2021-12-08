import { Link } from "react-router-dom";
import { GamersContainer } from "../styles/ProductsGamersStyles";
import Header from "./Header";
import NavBar from "./NavBar";

const ProductsGamers = () => {
  return (
    <>
      <Header />
      <NavBar />
      <GamersContainer>
        <div className="img-container">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_LPHeader_Gamers_es_US.png"
            alt=""
          />
        </div>

        <h1>Categorías destacadas</h1>

        <div className="products-container">
          <div className="product">
            <Link to="/productos/controles" className="link-img">
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_LP_Controller2.png"
                alt=""
              />
              <p>Controles</p>
            </Link>
          </div>
          <div className="product">
            <Link to="/productos/sillas" className="link-img">
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_Quad_Chair.jpg"
                alt=""
              />
              <p>Sillas</p>
            </Link>
          </div>
          <div className="product">
            <Link to="/productos/teclados" className="link-img">
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_Quad_Keyboard.jpg"
                alt=""
              />
              <p>Teclados</p>
            </Link>
          </div>
          <div className="product">
            <Link to="/productos/ratones" className="link-img">
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_Quad_Mouse.jpg"
                alt=""
              />
              <p>Ratones de computador</p>
            </Link>
          </div>
          <div className="product">
            <Link to="/productos/oculus" className="link-img">
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_LP_Oculus2.jpg"
                alt=""
              />
              <p>Oculus</p>
            </Link>
          </div>
        </div>
      </GamersContainer>
    </>
  );
};

export default ProductsGamers;
