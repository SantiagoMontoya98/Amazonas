import React from "react";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import { CardsMainContainer } from "../styles/CardsMainStyles";

const CardsMain = () => {
  return (
    <CardsMainContainer>
      <Card2
        name="Compra por Categoría"
        img1="https://m.media-amazon.com/images/I/71+2H96GHZL._AC_UL320_.jpg"
        text1="Computadores"
        img2="https://m.media-amazon.com/images/I/91pjZAMbEUS._AC_UL320_.jpg"
        text2="Tablets"
        img3="https://images-na.ssl-images-amazon.com/images/I/817dIPZKz9L._AC._SR360,460.jpg"
        text3="Videojuegos"
        img4="https://m.media-amazon.com/images/I/71vwqTBgYuL._AC_SX425_.jpg"
        text4="Auriculares"
        link="Compra ahora"
        ruta1="/productos/computadores"
        ruta2="/productos/tablets"
        ruta3="/productos/videojuegos"
        ruta4="/productos/auriculares"
        ruta="/categoria"
      />

      <Card1
        name="Electrónicos"
        img="https://m.media-amazon.com/images/I/7120GgUKj3L._AC_UL320_.jpg"
        text="Ver más"
        ruta="/productos/electronicos"
      />

      <Card2
        name="Accesorios para Juegos"
        img1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_LP_Controller2.png"
        text1="Controles"
        img2="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_Quad_Chair.jpg"
        text2="Sillas"
        img3="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_Quad_Keyboard.jpg"
        text3="Teclados"
        img4="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_Quad_Mouse.jpg"
        text4="Ratones de computador"
        link="Ver más"
        ruta1="/productos/controles"
        ruta2="/productos/sillas"
        ruta3="/productos/teclados"
        ruta4="/productos/ratones"
        ruta="/gamers"
      />

      <Card1
        name="Ofertas y Promociones"
        img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg"
        text="Compra ahora"
        ruta="/productos/ofertas"
      />
    </CardsMainContainer>
  );
};

export default CardsMain;
