import styled from "styled-components";

export const DetalleContainer = styled.div`
  /* border: 1px solid green; */
  width: 95vw;
  margin-left: auto;
  margin-right: auto;
  /* height: 80vh; */
  margin-top: 50px;
  margin-bottom: 40px;
  .arrow {
    margin-right: 4px;
    color: #565959;
  }
  .link {
    text-decoration-line: none;
    color: #565959;
    font-family: "Amazonas", Arial, sans-serif;
    font-size: 12px;
  }
  .link:hover {
    text-decoration-line: underline;
    cursor: pointer;
  }
  .container-main {
    /* border: 1px solid red; */
    width: 100%;
    margin-top: 15px;
    display: flex;
  }
  .images {
    /* border: 1px solid blue; */
    width: 50px;
  }
  .more-img {
    width: 100%;
    height: 35px;
    margin-bottom: 10px;
    /* border: 1px solid var(--color-negro); */
    cursor: pointer;
  }
  .product {
    /* border: 1px solid green; */
    width: 35%;
    height: 80%;
    margin-left: 10px;
  }
  .img {
    width: 100%;
    height: 100%;
  }
  .description {
    /* border: 1px solid blue; */
    width: 45%;
    height: 90%;
    margin-left: 10px;
  }
  .buy {
    /* border: 1px solid blue; */
    width: 20%;
    height: 50%;
    margin-left: 10px;
    border-radius: 8px;
    padding: 14px 18px;
    text-align: left;
  }
  p {
    margin: 0;
  }
  .name-container {
    /* border: 1px solid black; */
  }
  .name {
    font-size: 24px;
    font-weight: 600;
  }
  .marca {
    color: var(--color-link);
    text-decoration-line: none;
  }
  .marca:hover {
    color: var(--color-naranjado-3);
    text-decoration-line: underline;
  }
  .price-container {
    /* border: 1px solid red; */
    margin-top: 20px;
    margin-bottom: 20px;
    font-family: "Amazonas", Arial, sans-serif;
    font-size: 14px;
  }
  .price {
    color: var(--color-precio);
    font-family: "Amazonas", Arial, sans-serif;
    font-size: 18px;
  }
  .send {
    font-family: "Amazonas Bold", Arial, sans-serif;
  }
  .about {
    /* border: 1px solid black; */
  }
  .about-title {
    font-family: "Amazonas Bold", Arial, sans-serif;
    margin-bottom: 5px;
  }
  ul {
    /* border: 1px solid green; */
    padding-left: 18px;
    font-size: 14px;
    margin-bottom: 0;
  }
  li {
    font-weight: 600;
  }
  .cantidad {
    font-family: "Amazonas", Arial, sans-serif;
    font-size: 11px;
    margin-top: 10px;
    border-radius: 6px;
    padding: 2px;
    box-shadow: 0 0 10px -5px black;
  }
  button {
    border-width: 0;
    margin-bottom: 10px;
    width: 100%;
    border-radius: 40px;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 14px;
    font-family: "Amazonas", Arial, sans-serif;
  }
  .agregar {
    margin-top: 10px;
    background-color: var(--color-amarillo);
  }
  .comprar {
    background-color: var(--color-naranjado-4);
  }
  .agregar:hover {
    background-color: #f7ca00;
  }
  .comprar:hover {
    background-color: #fa8900;
  }
`;
