import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { RelatedContainer } from "../styles/RelatedProductsStyles";
import uuid from "react-uuid";
import { Link } from "react-router-dom";

const RelatedProducts = () => {
  const { id } = useParams();

  const { products } = useSelector((state) => state.products);

  return (
    <RelatedContainer>
      <p className="text">Productos relacionados con este artículo</p>

      <div className="products-container">
        {products.map((product, index) => {
          if (product?.path !== id && index < 5) {
            return (
              <div className="product" key={uuid()}>
                <Link to={`/detalle/${product.path}`} className="link">
                  <div className="img-container">
                    <img
                      src={product.img1}
                      alt={product.name}
                      title={product.name}
                      className="img"
                    />
                  </div>

                  <div className="link-container">{product.name}</div>
                </Link>
                <p className="price">US${product.price}</p>
              </div>
            );
          }
        })}
      </div>
    </RelatedContainer>
  );
};

export default RelatedProducts;
