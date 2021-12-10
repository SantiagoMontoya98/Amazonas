import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getUbicacion2 } from "../redux/actions/actionUbicacion";
import {
  CarContainer,
  DireccionContainer,
  HeaderContainer,
  IdentificateContainer,
  SearchContainer,
} from "../styles/HeaderStyles";

const Header = () => {
  let url = "";

  const [ubicacion, setUbicacion] = useState("");
  const [ubicacion2, setUbicacion2] = useState("");

  const dispatch = useDispatch();

  /* useEffect(() => {
    getCoordenadas();
  }); */

  const getCoordenadas = () => {
    //watchPosition
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      url =
        "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
        latitude +
        "," +
        longitude +
        "&key=AIzaSyDvS3_rBwM7RJYjDOnPzquTpJVlskDs7nI";
      //console.log(latitude, longitude);
      getUbicacion(url);
    });
  };

  const getUbicacion = async (endpoint) => {
    const resp = await fetch(endpoint);
    const { results } = await resp.json();
    console.log(results[0].formatted_address);
    setUbicacion(results[9].formatted_address);
    setUbicacion2(results[0].formatted_address);
  };

  const handleUbicacion = () => getCoordenadas();

  useEffect(() => {
    dispatch(getUbicacion2(ubicacion2));
  }, [ubicacion2]);

  return (
    <HeaderContainer>
      <Link to="/">
        <img
          src="https://res.cloudinary.com/da6fz1omm/image/upload/v1638142583/Im%C3%A1genes%20Amazonas/logo-amazonas_qisi37.png"
          alt="Amazonas"
          className="logo"
        />
      </Link>

      <DireccionContainer className="container" onClick={handleUbicacion}>
        <p className="hola">{ubicacion === "" ? "Hola" : "Enviar a"}</p>
        <div className="direccion">
          <img
            src="https://res.cloudinary.com/da6fz1omm/image/upload/v1638142583/Im%C3%A1genes%20Amazonas/gps_mfcaav.png"
            alt="gps"
          />
          <p className="elige">
            {ubicacion === "" ? "Elige tu dirección" : ubicacion}
          </p>
        </div>
      </DireccionContainer>

      <SearchContainer>
        <select className="categoria" value="ordernar">
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
