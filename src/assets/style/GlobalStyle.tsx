import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .container{
        
        max-width: 1235px;
        margin: 0 auto;
        padding: 0 1rem;
    }
`;