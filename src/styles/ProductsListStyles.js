import styled from "styled-components";

export const ListContainer = styled.div`
  width: 100%;
  /* border: 1px solid green; */
  padding: 35px 40px;

  h1 {
    width: 100%;
    text-align: center;
    font-size: 28px;
    font-family: "Amazonas", Arial, sans-serif;
    margin-bottom: 30px;
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
      width: 80%;
      /* border: 1px solid green; */
      font-family: "Amazonas", Arial, sans-serif;
      margin-left: 20px;

      .description {
        font-size: 19px;
        margin-top: 20px;

        &:hover {
          color: var(--color-naranjado-3);
          cursor: pointer;
        }
      }

      .price {
        font-size: 21px;
        margin-bottom: 0;
      }

      .send {
        margin: 0;
        font-family: "Amazonas Bold", Arial, sans-serif;
        font-size: 14px;
        color: #565959;
      }
    }
  }
`;
