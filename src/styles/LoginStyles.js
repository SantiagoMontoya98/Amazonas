import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  /* border: 1px solid green; */
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
  .google-fb {
    width: 8%;
    margin-top: 20px;
    /* border: 1px solid green; */
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 50px;
    padding: 5px 0;
  }
  .fb {
    font-size: 25px;
    background-color: #0696f6;
    color: #fff;
    padding: 5px;
    height: 100%;
    width: 40px;
    border-radius: 3px;
  }
  .fb:hover {
    cursor: pointer;
  }
  .google {
    height: 100%;
  }
  .google:hover {
    cursor: pointer;
  }
  .nuevo {
    width: 25%;
    /* border: 1px solid red; */
    text-align: center;
    color: #767676;
    font-size: 13px;
    margin-top: 20px;
    margin-bottom: 10px;
    font-family: "Amazonas", Arial, sans-serif;
  }
  .link-crear {
    width: 25%;
  }

  .crear {
    width: 100%;
    border-width: 0;
    background: linear-gradient(to bottom, #f7f8fa, #e7e9ec);
    box-shadow: 0 1px 0 rgb(255 255 255 / 60%) inset;
    padding: 4px;
    border-radius: 3px;
    border-color: #adb1b8 #a2a6ac #8d9096;
    border-style: solid;
    border-width: 1px;
    font-family: "Amazonas", Arial, sans-serif;
    font-size: 14px;
    color: #111;
  }
  .crear:hover {
    background: #e0e3e9;
  }
  .link-inicio {
    font-family: "Amazonas", Arial, sans-serif;
    font-size: 13px;
    margin-top: 20px;
    color: #0066c0;
    text-decoration: none;
  }
  .link-inicio:hover {
    color: var(--color-naranjado-5);
    text-decoration: underline;
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
