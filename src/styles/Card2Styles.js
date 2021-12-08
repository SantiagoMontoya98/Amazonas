import styled from "styled-components";

export const Card2Container = styled.div`
  width: 310px;
  height: 450px;
  background-color: var(--color-blanco);
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 4px;
  margin-top: 16px;
  z-index: 4;
  .h2 {
    margin: 0;
    font-family: "Amazonas Bold", Arial, sans-serif;
    font-size: 21px;
    align-self: flex-start;
    /* margin-left: 12px; */
    margin-bottom: 10px;
    margin-top: 23px;
  }
  .text-img {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 91%;
    height: 350px;
    /* border: 1px solid green; */
    margin-top: 11px;
  }
  .text {
    align-self: flex-start;
    margin-left: 15px;
    color: var(--color-link);
    text-decoration-line: none;
    font-family: "Amazonas", Arial, sans-serif;
    font-size: 13px;
    margin-bottom: 35px;
  }
  .text:hover {
    color: var(--color-naranjado-2);
    text-decoration-line: underline;
  }
  .categoria-container {
    display: flex;
    justify-content: space-between;
    /* border: 1px solid green; */
    width: 100%;
    height: 130px;
  }
  .img-container {
    width: 48%;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    /* border: 1px solid red; */
    cursor: pointer;
  }
  .img {
    width: 100px;
    height: 90px;
  }
  p {
    margin: 0;
    margin-top: 11px;
    font-size: 12px;
    font-family: "Amazonas", Arial, sans-serif;
    /* margin-top: 5px; */
    text-align: center;
  }
`;
