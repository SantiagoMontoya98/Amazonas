import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 64px;
  background-color: var(--color-negro);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo:hover {
    cursor: pointer;
    border: 1px solid #fff;
    border-radius: 2px;
  }

  .car-container {
    height: inherit;
    display: flex;
    align-items: center;
    /* border: 1px solid red; */
    color: var(--color-blanco);
    cursor: pointer;
    width: 250px;
    text-decoration-line: none;
    .img-car {
      /* border: 1px solid green; */
    }
    .text-container {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      /* border: 1px solid yellow; */
      height: 38px;
    }
    .text {
      margin-top: 20px;
      font-family: "Amazonas Bold", sans-serif;
      font-size: 14px;
    }
  }

  .lista-productos {
    background-color: #fff;
    width: 35.8%;
    position: absolute;
    top: 50px;
    left: 490px;
    z-index: 999;
    p {
      margin: 0;
      padding: 5px;
      &:hover {
        background-color: var(--color-fondo);
      }
    }
    a {
      color: black;
      text-decoration-line: none;
    }
  }
`;

export const DireccionContainer = styled.div`
  /* border: 1px solid green; */
  height: inherit;
  color: var(--color-blanco);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  width: 250px;
  img {
  }
  .hola {
    margin: 0;
    margin-top: 12px;
    /* border: 1px solid yellow; */
    margin-left: 25px;
    font-family: "Amazonas", Arial, sans-serif;
    font-size: 12px;
  }
  .direccion {
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    cursor: pointer;
    padding-bottom: 15px;
  }
  .elige {
    margin: 0;
    /* border: 1px solid pink; */
    font-family: "Amazonas Bold", Arial, sans-serif;
    font-size: 14px;
  }
`;

export const SearchContainer = styled.div`
  width: 80%;
  display: flex;
  position: relative;
  margin-right: 8px;
  /* border: 1px solid green; */
  .categoria {
    width: 25%;
    height: 36px;
    font-family: "Amazonas", sans-serif;
    font-size: 12px;
    text-align: center;
    cursor: pointer;
    margin: 0;
    border-radius: 4px 0 0 4px;
    background-color: var(--color-fondo);
    border-right: 1px solid #dadada;
    &:hover {
      background-color: #dadada;
    }
  }
  .buscador {
    width: 70%;
    height: 36px;
    font-family: "Amazonas", sans-serif;
    font-size: 14px;
    outline-width: 0;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-left-width: 0;
    padding-left: 10px;
  }
  .buscador:focus {
    outline-width: 0;
  }
  .lupa-container {
    width: 40px;
    height: 35px;
    position: absolute;
    top: 0.5px;
    right: 0;
    background-color: var(--color-naranjado);
    border-radius: 0 4px 4px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .lupa {
    /* border: 1px solid yellow; */
    width: 55%;
  }
`;

export const IdentificateContainer = styled.div`
  height: inherit;
  /* border: 1px solid aquamarine; */
  color: var(--color-blanco);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
  padding-bottom: 15px;
  width: 200px;
  .identificate {
    margin: 0;
    margin-top: 12px;
    font-family: "Amazonas", sans-serif;
    font-size: 12px;
  }
  .cuenta {
    margin: 0;
    font-family: "Amazonas Bold", sans-serif;
    font-size: 14px;
    margin-bottom: 2px;
    /* border: 1px solid red; */
    cursor: pointer;
  }
  .link-login {
    text-decoration-line: none;
    text-decoration-color: var(--color-azul);
    color: var(--color-blanco);
  }
  .options {
    /* border: 1px solid green; */
    width: 100px;
    margin-top: 10px;
    z-index: 5;
  }
  .login {
    background: linear-gradient(to bottom, #f7dfa5, #f0c14b);
    border-width: 0;
    padding: 5px 6px;
    border-width: 1px;
    border-style: solid;
    border-color: #a88734 #9c7e31 #846a29;
    font-family: "Amazonas", Arial, sans-serif;
    font-size: 14px;
    border-radius: 3px;
    color: #111;
    margin-top: 5px;
    box-shadow: 0 1px 0 rgb(255 255 255 / 40%) inset;
    &:hover {
      background: #f0c457;
    }
  }
  .link {
    text-decoration-line: none;
  }
`;

export const CarContainer = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
  /* border: 1px solid red; */
  color: var(--color-blanco);
  cursor: pointer;
  width: 250px;
  .img-car {
    /* border: 1px solid green; */
  }
  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* border: 1px solid yellow; */
    height: 38px;
  }
  .text {
    margin-top: 20px;
    font-family: "Amazonas Bold", sans-serif;
    font-size: 14px;
  }
`;
