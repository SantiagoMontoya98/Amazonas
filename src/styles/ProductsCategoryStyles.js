import styled from "styled-components";

export const CategoryContainer = styled.div`
  width: 99%;
  padding: 15px 20px;
  margin: 0 auto;

  h1 {
    width: 100%;
    text-align: center;
    font-family: "Amazonas", Arial, sans-serif;
    font-size: 28px;
    margin-top: 25px;
    margin-bottom: 25px;
  }

  .products-container {
    width: 100%;
    /* border: 1px solid blue; */
    display: flex;
  }

  .product {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 90%;
      height: auto;
    }

    p {
      margin-top: 20px;
      font-family: "Amazonas", Arial, sans-serif;
      font-size: 14px;
    }
  }
`;
