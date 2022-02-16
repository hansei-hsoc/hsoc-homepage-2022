import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    * {
        box-sizing: border-box;
    }

    html, body, #__next {
        width: 100%;
        height: 100%;
        font-size: 16px;
        font-weight: 400;
        font-family: 'Spoqa Han Sans Neo', sans-serif;
    }
`;
