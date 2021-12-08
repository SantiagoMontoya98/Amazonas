import React from "react";
import { Link } from "react-router-dom";
import { Card1Container } from "../styles/Card1Styles";

const Card1 = ({ name, img, text, ruta }) => {
  return (
    <Card1Container>
      <div className="text-img">
        <h2 className="h2">{name}</h2>
        <Link to={ruta}>
          <img src={img} alt={name} className="img" />
        </Link>
      </div>
      <Link to={ruta} className="text">
        {text}
      </Link>
    </Card1Container>
  );
};

export default Card1;
