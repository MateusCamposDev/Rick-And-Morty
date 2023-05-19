import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
    margin: 0; padding: 0;
    border: none;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-size: 1.6rem;
    font-family: 'Lato', sans-serif;
    color: white;
}

body {
    background-color: #040011;
}

img {
    max-width: 100%;
    display: block;
}

html {
    font-size: 62.5%;
}

button {
    cursor: pointer;
    display: block;
}


`;

export default GlobalStyle;
