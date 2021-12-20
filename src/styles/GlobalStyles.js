import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  :root{
    --color-negro: #131921;
    --color-azul: #242F3E;
    --color-blanco: #fff;
    --color-blanco-2: #fafafa;
    --color-naranjado: #F0AD64;
    --color-naranjado-2: #f08804;
    --color-naranjado-3: #C7511F;
    --color-naranjado-4: #ffa026;
    --color-naranjado-5: #C60;
    --color-link: #007185;
    --color-fondo: #EAEDED;
    --color-precio: #B12704;
    --color-amarillo: #fed813;
    --color-error: #c40000;
  }  

  *,
  *::before,
  *::after{
    box-sizing: border-box;
  } 

  body{
    margin: 0;
    overflow-x: hidden;    
  }

  .container:hover {
    cursor: pointer;
    border: 1px solid #fff;
    border-radius: 2px;    
  }

  .link{
    text-decoration-line: none;
    color: #212529;
  }

  .link:hover{
    color: #212529;
  }
  
  .link-img{
    text-decoration-line: none;
    color: #212529;
    text-align: center;
  }

  .link-img:hover{
    color: #212529;
  }

  .swal2-styled.swal2-confirm {
      border: 0;
      border-radius: 0.25em;
      background: initial;
      background: linear-gradient(to bottom, #f7dfa5, #f0c14b);
      color: black;
      font-size: 1em;
      
      &:hover {
        background: #f0c457;
      }
  }  

`;
