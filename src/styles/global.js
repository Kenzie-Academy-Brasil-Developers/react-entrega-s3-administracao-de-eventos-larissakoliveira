import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  li, a, ul{
    text-decoration: none;
    list-style: none;
  }

  button {
    cursor: pointer;
    padding: 5px;
    color: #ffffff;
    font-weight: bold;
  }

  button:hover {
    background-color: #FCFCFC;
  }
  
  h2, h3, h4, h5, p, a, button{
  font-family: 'Rokkitt', serif;
  }
  
  h1{
  font-family: 'Akronim', cursive;
  }
`