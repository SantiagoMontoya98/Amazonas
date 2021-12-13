import styled from "styled-components";

export const CarritoContainer = styled.div`
  width: 100%;
  /* border: 1px solid green; */
  padding: 35px 40px;

  h1 {
    width: 100%;
    font-size: 28px;
    font-family: "Amazonas", Arial, sans-serif;
    margin-bottom: 0;
    /* border: 1px solid red; */
    text-align: left;
  }

  .title-price {
    width: 100%;
    font-size: 14px;
    font-family: "Amazonas", Arial, sans-serif;
    margin-bottom: 0;
    /* border: 1px solid red; */
    text-align: right;
    color: #565959;
  }

  .product-container {
    width: 100%;
    height: 40%;
    /* border: 1px solid red; */
    display: flex;
    border-bottom: 2px solid #ddd;

    .img-link {
      width: 20%;
    }

    img {
      width: 100%;
      padding: 10px;
      /* border: 1px solid black; */
    }

    .description-container {
      width: 50%;
      /* border: 1px solid green; */
      font-family: "Amazonas", Arial, sans-serif;
      margin-left: 5px;

      .description {
        font-size: 19px;
        margin-top: 20px;
        margin-bottom: 5px;

        &:hover {
          color: var(--color-naranjado-3);
          cursor: pointer;
        }
      }

      .cantidad {
        font-family: "Amazonas", Arial, sans-serif;
        font-size: 16px;
        margin-top: 0;
        border-radius: 6px;
        padding: 2px;
        box-shadow: 0 0 10px -5px black;
      }
    }

    .price {
      font-size: 19px;
      margin-bottom: 0;
      /* border: 1px solid green; */
      width: 30%;
      text-align: right;
      font-family: "Amazonas Bold", Arial, sans-serif;
    }

    .eliminar {
      font-size: 14px;
      color: var(--color-link);
      &:hover {
        color: var(--color-naranjado-3);
        cursor: pointer;
      }
    }
  }
  .subtotal {
    /* border: 1px solid green; */
    width: 100%;
    text-align: right;
    font-size: 19px;
    font-family: "Amazonas Bold", Arial, sans-serif;

    span {
      font-family: "Amazonas", Arial, sans-serif;
    }
  }

  .button-container {
    width: 100%;
    /* border: 1px solid red; */
    display: flex;
    justify-content: flex-end;
  }
  button {
    border-width: 0;
    margin-bottom: 10px;
    width: 22%;
    border-radius: 40px;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 14px;
    font-family: "Amazonas", Arial, sans-serif;
  }

  .comprar {
    background-color: var(--color-amarillo);
  }

  .comprar:hover {
    background-color: #f7ca00;
  }
`;
