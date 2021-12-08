import React from "react";
import { Link } from "react-router-dom";
import { Card2Container } from "../styles/Card2Styles";

const Card2 = ({
  name,
  img1,
  img2,
  img3,
  img4,
  text1,
  text2,
  text3,
  text4,
  link,
  ruta1,
  ruta2,
  ruta3,
  ruta4,
  ruta,
}) => {
  return (
    <Card2Container>
      <div className="text-img">
        <h2 className="h2">{name}</h2>
        <div className="categoria-container">
          <div className="img-container">
            <Link to={ruta1} className="link-img">
              <img src={img1} alt={text1} className="img" />
              <p>{text1}</p>
            </Link>
          </div>
          <div className="img-container">
            <Link to={ruta2} className="link-img">
              <img src={img2} alt={text2} className="img" />
              <p>{text2}</p>
            </Link>
          </div>
        </div>
        <div className="categoria-container">
          <div className="img-container">
            <Link to={ruta3} className="link-img">
              <img src={img3} alt={text3} className="img" />
              <p>{text3}</p>
            </Link>
          </div>
          <div className="img-container">
            <Link to={ruta4} className="link-img">
              <img src={img4} alt={text4} className="img" />
              <p>{text4}</p>
            </Link>
          </div>
        </div>
      </div>
      <Link to={ruta} className="text">
        {link}
      </Link>
    </Card2Container>
  );
};

export default Card2;
