import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-color: #f0f2f5;
    font-family: Arial, Helvetica, sans-serif
  }
  :root{
    --color-primary: #f3537e;
    --color-light-pink: #ff7b9c;
  }
`;

export default GlobalStyle;
