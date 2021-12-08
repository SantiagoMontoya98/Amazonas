import Carousel from "react-bootstrap/Carousel";
import { SliderProductsContainer } from "../styles/SlidersProductsStyles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProductsFirebase } from "../redux/actions/actionProducts";
import { Link } from "react-router-dom";
import uuid from "react-uuid";

const SliderProducts = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  const products01 = [],
    products02 = [];

  const [products1, setProducts1] = useState([]);

  const [products2, setProducts2] = useState([]);

  useEffect(() => {
    dispatch(getProductsFirebase("SliderProducts"));
  }, []);

  useEffect(() => {
    for (let i = 9; i > 4; i--) {
      products01.push(products[i]);
    }

    for (let i = 4; i > -1; i--) {
      products02.push(products[i]);
    }

    setProducts1(products01);
    setProducts2(products02);
  }, [products]);

  return (
    <SliderProductsContainer>
      <p className="text">Productos populares</p>
      <Carousel className="carousel" interval={null}>
        <Carousel.Item>
          {products1.map((product) => {
            if (product !== undefined) {
              return (
                <Link to={`detalle/${product.path}`} key={uuid()}>
                  <img className="img" src={product.img1} alt={product.name} />
                </Link>
              );
            }
          })}
        </Carousel.Item>
        <Carousel.Item>
          {products2.map((product) => {
            if (product !== undefined) {
              return (
                <Link to={`detalle/${product.path}`} key={uuid()}>
                  <img className="img" src={product.img1} alt={product.name} />
                </Link>
              );
            }
          })}
        </Carousel.Item>
      </Carousel>
    </SliderProductsContainer>
  );
};

export default SliderProducts;
