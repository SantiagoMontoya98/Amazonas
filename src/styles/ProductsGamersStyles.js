import styled from "styled-components";

export const GamersContainer = styled.div`
  width: 100%;
  padding: 15px 20px;
  /* border: 5px solid green; */

  .img-container {
    width: 100%;
    /* border: 1px solid red;
 */
    img {
      width: 100%;
    }
  }

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
    margin-bottom: 100px;
  }
  .product {
    width: 20%;
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 90%;
      /* border: 1px solid green; */
    }

    p {
      margin-top: 20px;
      font-family: "Amazonas", Arial, sans-serif;
      font-size: 14px;
    }
  }
`;
