import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root {
        font-family: "Nunito Sans";
        font-size: 62.5%;
    }

    body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 1.6rem;
    }
`;
