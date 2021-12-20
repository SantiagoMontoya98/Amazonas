import styled from "styled-components";

export const SliderProductsContainer = styled.div`
  /* border: 1px solid green; */
  width: 94vw;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  background-color: var(--color-blanco);
  height: 215px;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  .text {
    margin: 0;
    margin-bottom: 5px;
    font-family: "Amazonas Bold", Arial, sans-serif;
    color: #444;
    font-size: 19px;
  }
  .carousel {
    /* border: 1px solid green; */
  }
  .img {
    width: 20%;
    height: 150px;
    /* border: 1px solid red; */
    cursor: pointer;
    display: inline;
  }
`;
