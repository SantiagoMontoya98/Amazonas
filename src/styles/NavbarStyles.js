import styled from "styled-components";

export const NavBarContainer = styled.div`
  /* border: 1px solid green; */
  background-color: var(--color-azul);
  color: var(--color-blanco);
  width: 100%;
  height: 40px;

  p {
    margin: 0;
    font-size: 13px;
    /* border: 1px solid green; */
    text-align: center;
  }

  .link-products {
    text-decoration-line: none;
    text-decoration-color: var(--color-azul);
    color: var(--color-blanco);
    /* border: 1px solid green; */
  }

  .ubicacion {
    /* border: 1px solid green; */
    text-align: left;
    &:hover {
      cursor: default;
    }
  }

  .options-container {
    width: 68%;
    height: 100%;
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-family: "Amazonas Bold";
    font-size: 12px;
    margin-left: 25px;
  }
  .todo-container {
    /* border: 1px solid green; */
    display: flex;
    align-items: center;
    margin-right: 15px;
  }
  .todo-container:hover {
    cursor: pointer;
    border: 1px solid #fff;
    border-radius: 2px;
  }
  .todo {
    /* border: 1px solid yellow; */
    margin: 0;
    margin-left: 5px;
  }
`;
