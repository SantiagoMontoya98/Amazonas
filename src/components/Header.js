import React from "react";
import { Link } from "react-router-dom";
import {
  CarContainer,
  DireccionContainer,
  HeaderContainer,
  IdentificateContainer,
  SearchContainer,
} from "../styles/HeaderStyles";

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <img
          src="https://res.cloudinary.com/da6fz1omm/image/upload/v1638142583/Im%C3%A1genes%20Amazonas/logo-amazonas_qisi37.png"
          alt="Amazonas"
          className="logo"
        />
      </Link>

      <DireccionContainer className="container">
        <p className="hola">Hola</p>
        <div className="direccion">
          <img
            src="https://res.cloudinary.com/da6fz1omm/image/upload/v1638142583/Im%C3%A1genes%20Amazonas/gps_mfcaav.png"
            alt="gps"
          />
          <p className="elige">Elige tu dirección</p>
        </div>
      </DireccionContainer>

      <SearchContainer>
        <select className="categoria">
          <option value="">Todos los departamentos</option>
          <option value="">Hogar</option>
          <option value="">Electronicos</option>
        </select>
        <input type="text" className="buscador" />
        <div className="lupa-container">
          <img
            src="https://res.cloudinary.com/da6fz1omm/image/upload/v1638394439/Im%C3%A1genes%20Amazonas/search_aperd5.svg"
            alt="buscador"
            className="lupa"
          />
        </div>
      </SearchContainer>

      <IdentificateContainer className="container">
        <Link to="/login" className="link-login">
          <p className="identificate">Hola, identificate</p>

          <p className="cuenta">Cuenta</p>
        </Link>
      </IdentificateContainer>

      <CarContainer className="container">
        <div>
          <img
            src="https://res.cloudinary.com/da6fz1omm/image/upload/v1638148907/Im%C3%A1genes%20Amazonas/shopping-cart_tc2egg.png"
            alt="carrito"
            className="img-car"
          />
        </div>
        <div className="text-container">
          <p className="text">Carrito</p>
        </div>
      </CarContainer>
    </HeaderContainer>
  );
};

export default Header;
