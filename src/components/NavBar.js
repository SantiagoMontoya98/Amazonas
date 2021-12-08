import { Link } from "react-router-dom";
import { NavBarContainer } from "../styles/NavbarStyles";

const NavBar = () => {
  return (
    <NavBarContainer>
      <div className="options-container">
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
        <Link to="/productos/electronicos" className="link-products">
          <p className="container products">Electrónicos</p>
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
      </div>
    </NavBarContainer>
  );
};

export default NavBar;
