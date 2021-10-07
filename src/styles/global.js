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
    padding: 3px;
    width: 125px;
    height: 30px;
    color: 'black';
    font-weight: bold;
    border-radius: 8px;
    margin: 2px;
  }

  img{
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }

  details{
    cursor: pointer;
  }

  button:hover {
    background-color: #FCFCFC;
  }
  
  h2, h3, h4, h5, p, a, button, details{
  font-family: 'Rokkitt', serif;
  }
  
  h1{
  font-family: 'Akronim', cursive;
  padding: 10px;
  color: #9c27b0;
  font-size: 35px;
  }
`