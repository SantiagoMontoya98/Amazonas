import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutAsync } from "../redux/actions/actionLogin";
import { getAllProductsFirebase } from "../redux/actions/actionProducts";
import { getUbicacion2 } from "../redux/actions/actionUbicacion";
import {
  DireccionContainer,
  HeaderContainer,
  IdentificateContainer,
  SearchContainer,
} from "../styles/HeaderStyles";
import uuid from "react-uuid";

const Header = () => {
  let url = "";

  const [ubicacion, setUbicacion] = useState("");

  const [ubicacion2, setUbicacion2] = useState("");

  const dispatch = useDispatch();

  const { name } = useSelector((state) => state.userLogin);

  const { allProducts } = useSelector((state) => state.products);

  const [display, setDisplay] = useState("none");

  const [display2, setDisplay2] = useState("none");

  const [bandera, setBandera] = useState(0);

  const [productos, setProductos] = useState([]);

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
    //console.log(results[0].formatted_address);
    setUbicacion(results[9].formatted_address);
    setUbicacion2(results[0].formatted_address);
    localStorage.setItem("pais", results[9].formatted_address);
    localStorage.setItem("direccion", results[0].formatted_address);
  };

  const handleUbicacion = () => getCoordenadas();

  const handleLogin = () => {
    if (display === "none") {
      setDisplay("");
    }
    if (display === "") {
      setDisplay("none");
    }
  };

  const handleLogout = () => {
    dispatch(logoutAsync());
    //window.location.reload();
  };

  const handleSearch = ({ target }) => {
    //console.log(target.value);
    //console.log(bandera);
    if (bandera === 0 && allProducts.length !== 65) {
      dispatch(getAllProductsFirebase("SliderProducts"));
      dispatch(getAllProductsFirebase("auriculares"));
      dispatch(getAllProductsFirebase("computadores"));
      dispatch(getAllProductsFirebase("controles"));
      dispatch(getAllProductsFirebase("electronicos"));
      dispatch(getAllProductsFirebase("oculus"));
      dispatch(getAllProductsFirebase("ofertas"));
      dispatch(getAllProductsFirebase("ratones"));
      dispatch(getAllProductsFirebase("sillas"));
      dispatch(getAllProductsFirebase("tablets"));
      dispatch(getAllProductsFirebase("teclados"));
      dispatch(getAllProductsFirebase("videojuegos"));
      setBandera(1);
    }

    setProductos(
      allProducts.filter((el) =>
        el.name.toLowerCase().includes(target.value.toLowerCase())
      )
    );

    if (productos.length > 0) setDisplay2("");
    if (target.value === "") setDisplay2("none");
  };

  useEffect(() => {
    setUbicacion(localStorage.getItem("pais"));
  });

  useEffect(() => {
    dispatch(getUbicacion2(ubicacion2));
  }, [ubicacion2]);

  //console.log(productos);

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
        <p className="hola">
          {localStorage.getItem("pais") === null ? "Hola" : "Enviar a"}
        </p>
        <div className="direccion">
          <img
            src="https://res.cloudinary.com/da6fz1omm/image/upload/v1638142583/Im%C3%A1genes%20Amazonas/gps_mfcaav.png"
            alt="gps"
          />
          <p className="elige">
            {localStorage.getItem("pais") === null
              ? "Elige tu dirección"
              : ubicacion}
          </p>
        </div>
      </DireccionContainer>

      <SearchContainer>
        <select className="categoria" value="ordernar">
          <option value="">Todos los departamentos</option>
        </select>
        <input type="text" className="buscador" onKeyDown={handleSearch} />
        <div className="lupa-container">
          <img
            src="https://res.cloudinary.com/da6fz1omm/image/upload/v1638394439/Im%C3%A1genes%20Amazonas/search_aperd5.svg"
            alt="buscador"
            className="lupa"
          />
        </div>
      </SearchContainer>

      <div className="lista-productos" style={{ display: display2 }}>
        {productos.map((el) => (
          <Link
            to={`/productos/${
              el.category === "Hardware"
                ? "ofertas"
                : el.category === "Electrónicos"
                ? "electronicos"
                : el.category.toLowerCase()
            }`}
            key={uuid()}
          >
            <p>{el.name}</p>
          </Link>
        ))}
      </div>

      <IdentificateContainer className="container" onClick={handleLogin}>
        <p className="identificate">
          Hola, {name === undefined ? "identifícate" : name?.split(" ")[0]}
        </p>
        <p className="cuenta">Cuenta</p>
        <div style={{ display: display }} className="options">
          <Link to="/login" className="link">
            <button
              className="login"
              style={
                name === undefined ? { display: "block" } : { display: "none" }
              }
            >
              Indentificate
            </button>
          </Link>
          <button
            className="login"
            style={
              name === undefined ? { display: "none" } : { display: "block" }
            }
            onClick={handleLogout}
          >
            Cerrar sesión
          </button>
        </div>
      </IdentificateContainer>

      <Link to="/carrito"></Link>

      <Link to="/carrito" className="container car-container">
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
      </Link>
    </HeaderContainer>
  );
};

export default Header;
