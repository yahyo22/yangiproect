import { createGlobalStyle } from "styled-components";

import "./Fonts.css"
import "./icon.css"
export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
    }
    
    .container{
        max-width: 1235px;
        margin: 0 auto;
        padding: 0 1rem;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
    }

    ul {
        list-style: none;
    }
`;
