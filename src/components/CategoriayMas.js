import React from "react";
import { CategoriayMasContainer } from "../styles/CategoriayMasStyles";

const CategoriayMas = ({ categoria }) => {
  return (
    <CategoriayMasContainer>
      <div className="second-container">
        <p className="categoria">{categoria}</p>
      </div>
    </CategoriayMasContainer>
  );
};

export default CategoriayMas;
