import { Link } from "react-router-dom";
import { CategoryContainer } from "../styles/ProductsCategoryStyles";
import Header from "./Header";
import NavBar from "./NavBar";

const ProductsCategory = () => {
  return (
    <>
      <Header />
      <NavBar />
      <CategoryContainer>
        <h1>Categorías destacadas</h1>

        <div className="products-container">
          <div className="product">
            <Link to="/productos/computadores" className="link-img">
              <img
                src="https://m.media-amazon.com/images/I/71+2H96GHZL._AC_UL320_.jpg"
                alt=""
              />
              <p>Computadores</p>
            </Link>
          </div>
          <div className="product">
            <Link to="/productos/tablets" className="link-img">
              <img
                src="https://m.media-amazon.com/images/I/91pjZAMbEUS._AC_UL320_.jpg"
                alt=""
              />
              <p>Tablets</p>
            </Link>
          </div>
          <div className="product">
            <Link to="/productos/videojuegos" className="link-img">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/817dIPZKz9L._AC._SR360,460.jpg"
                alt=""
              />
            </Link>
            <p>Videojuegos</p>
          </div>
          <div className="product">
            <Link to="/productos/auriculares" className="link-img">
              <img
                src="https://m.media-amazon.com/images/I/71vwqTBgYuL._AC_SX425_.jpg"
                alt=""
              />
              <p>Auriculares</p>
            </Link>
          </div>
        </div>
      </CategoryContainer>
    </>
  );
};

export default ProductsCategory;
