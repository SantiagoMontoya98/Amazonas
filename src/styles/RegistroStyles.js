import styled from "styled-components";

export const RegistroContainer = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .logo {
    border: 1px solic red;
    margin-bottom: 20px;
    margin-top: 10px;
  }
  .form-login {
    width: 25%;
    border: 1px solid green;
    padding: 20px;
    border-radius: 4px;
    border: 1px solid #ddd;
  }
  .h1 {
    font-family: "Amazonas", Arial, sans-serif;
    font-size: 28px;
  }
  .input-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* border: 1px solid red; */
    margin-bottom: 20px;
  }
  label {
    font-size: 13px;
    font-family: "Amazonas Bold", Arial, sans-serif;
    margin-bottom: 3px;
  }
  input {
    width: 100%;
    border: 1px solid #a6a6a6;
    border-top-color: #949494;
    border-radius: 3px;
    padding: 3px 7px;
    font-size: 13px;
    outline: 0;
    height: 30px;
  }
  input:focus {
    border: 1px solid var(--color-naranjado-2);
    box-shadow: 0 0 5px 1px var(--color-naranjado-2);
  }
  .button {
    background: linear-gradient(to bottom, #f7dfa5, #f0c14b);
    border-width: 0;
    padding: 5px 6px;
    border-width: 1px;
    border-style: solid;
    border-color: #a88734 #9c7e31 #846a29;
    font-family: "Amazonas", Arial, sans-serif;
    font-size: 14px;
    border-radius: 3px;
    color: #111;
    box-shadow: 0 1px 0 rgb(255 255 255 / 40%) inset;
  }
  .button:hover {
    background: #f0c457;
  }
  .login {
    font-family: "Amazonas", Arial, sans-serif;
    font-size: 13px;
    margin-top: 20px;
    a {
      color: #0066c0;
      text-decoration: none;
    }
    a:hover {
      color: var(--color-naranjado-5);
      text-decoration: underline;
    }
  }
  .error {
    color: var(--color-error);
    font-family: "Amazonas", Arial, sans-serif;
    font-size: 13px;
    margin-top: 5px;
  }
  .logo-error {
    margin-right: 5px;
    font-weight: bold;
  }
`;
