import styled from "styled-components";

export const RelatedContainer = styled.div`
  /* border: 1px solid green; */
  width: 95vw;
  height: 400px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  .text {
    font-family: "Amazonas Bold", Arial, sans-serif;
    font-size: 21px;
    color: var(--color-naranjado-5);
  }
  .products-container {
    display: flex;
  }
  .product {
    /* border: 1px solid red; */
    width: 25%;
    height: 350px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .img-container {
    width: 80%;
    height: 220px;
    /* border: 1px solid green; */
    margin-left: auto;
    margin-right: auto;
  }
  .img {
    width: 100%;
    height: 100%;
  }
  .link-container {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    /* border: 1px solid black; */
  }
  .link {
    font-family: "Amazonas", Arial, sans-serif;
    font-size: 14px;
    text-decoration-line: none;
    color: var(--color-link);
  }
  .link:hover {
    text-decoration-line: underline;
    color: var(--color-naranjado-3);
  }
  .price {
    color: var(--color-precio);
    font-family: "Amazonas", Arial, sans-serif;
    font-size: 18px;
    margin: 0;
    margin-top: 10px;
    /* border: 1px solid green; */
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
`;
