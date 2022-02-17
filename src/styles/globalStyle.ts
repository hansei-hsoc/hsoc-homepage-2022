import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    * {
        box-sizing: border-box;
    }

    :root {
        --color-primary: #5B3CFF;
    }

    html, body, #__next {
        width: 100%;
        height: 100%;
        font-size: 16px;
        font-weight: 400;
        font-family: 'Spoqa Han Sans Neo', sans-serif;
        background: #0E0F13;
        color: white;
        letter-spacing: -0.055em;
    }

    .container {
        width: 100%;
        max-width: 1280px;
        margin: 0 auto;
    }
`;
