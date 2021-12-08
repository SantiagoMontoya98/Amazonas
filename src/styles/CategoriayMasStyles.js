import styled from "styled-components";

export const CategoriayMasContainer = styled.div`
  height: 30px;
  background-color: var(--color-blanco-2);
  width: 100%;
  font-size: 12px;
  box-shadow: 0 1px 5px -1px var(--color-negro);
  /* border: 2px solid green; */
  p {
    font-family: "Amazonas";
    /* border: 1px solid black; */
    margin: 0;
  }
  p:hover {
    color: var(--color-naranjado-2);
  }
  .second-container {
    width: 12%;
    height: inherit;
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .categoria {
    font-family: "Amazonas Bold";
  }
  .categoria:hover {
    color: var(--color-naranjado-2);
    cursor: default;
  }
`;
