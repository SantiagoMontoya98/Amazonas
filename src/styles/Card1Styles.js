import styled from "styled-components";

export const Card1Container = styled.div`
  width: 310px;
  height: 450px;
  background-color: var(--color-blanco);
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0 4px;
  padding-right: 3px;
  margin-top: 16px;
  z-index: 4;
  .h2 {
    margin: 0;
    font-family: "Amazonas Bold";
    font-size: 21px;
    align-self: flex-start;
    /* margin-left: 12px; */
    margin-bottom: 10px;
  }
  .img {
    width: 275px;
    height: 260px;
  }
  .text-img {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 1px solid red; */
  }
  .text {
    align-self: flex-start;
    margin-left: 12px;
    color: var(--color-link);
    text-decoration-line: none;
    font-family: "Amazonas", Arial, sans-serif;
    font-size: 13px;
  }
  .text:hover {
    color: var(--color-naranjado-2);
    text-decoration-line: underline;
  }
`;
