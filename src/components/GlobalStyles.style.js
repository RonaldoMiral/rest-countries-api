import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :root { font-size: 62.5%; }
    
    body {
        font-family: "Nunito Sans";
        font-size: 1.6rem;
    }
`;
