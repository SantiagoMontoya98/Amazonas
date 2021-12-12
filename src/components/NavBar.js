import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NavBarContainer } from "../styles/NavbarStyles";

const NavBar = () => {
  const { ubicacion } = useSelector((state) => state.ubicacion);
  const { logged } = useSelector((state) => state.userLogin);

  return (
    <NavBarContainer>
      <div
        className="options-container"
        style={
          logged && localStorage.getItem("direccion") !== null
            ? { width: "100%" }
            : logged
            ? { width: "100%" }
            : localStorage.getItem("direccion") !== null
            ? { width: "60%" }
            : { width: "40%" }
        }
      >
        <div className="todo-container">
          <img
            src="https://res.cloudinary.com/da6fz1omm/image/upload/v1638142583/Im%C3%A1genes%20Amazonas/menu_keg2ot.png"
            alt=""
          />
          <p className="todo">Todo</p>
        </div>
        <Link to="/productos/computadores" className="link-products">
          <p className="container products">Computadores</p>
        </Link>
        <Link to="/productos/videojuegos" className="link-products">
          <p className="container">Videojuegos</p>
        </Link>
        <Link to="/productos/ofertas" className="link-products">
          <p className="container">Promociones</p>
        </Link>
        <Link to="/productos/oculus" className="link-products">
          <p className="container">Oculus</p>
        </Link>

        {logged ? (
          <Link to="/crear-producto" className="link-products">
            <p className="container">Crear Producto</p>
          </Link>
        ) : (
          ""
        )}

        {logged ? (
          <Link to="/form-productos" className="link-products">
            <p className="container">Actualizar o Eliminar Producto</p>
          </Link>
        ) : (
          ""
        )}

        <p className="container ubicacion">
          {localStorage.getItem("direccion") === null
            ? ""
            : localStorage.getItem("direccion")}
        </p>
      </div>
    </NavBarContainer>
  );
};

export default NavBar;
