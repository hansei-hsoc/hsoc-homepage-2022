import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    * {
        box-sizing: border-box;
    }

    :root {
        --small-mobile-breakpoint: 575px;
        --mobile-breakpoint: 767px;
        --tablet-breakpoint: 991px;
        --desktop-breakpoint: 1200px;
        
        --color-primary: #5B3CFF;  
    }

    html, body, #__next {
        width: 100%;
        font-size: 16px;
        font-weight: 400;
        font-family: 'Spoqa Han Sans Neo', sans-serif;
        background: #0E0F13;
        color: white;
        letter-spacing: -0.055em;
    }

    .container {
        width: 100%;
        max-width: 1100px;
        margin: 0 auto;

        @media screen and (max-width: 1300px) { 
            padding: 0 50px;
        }

        @media screen and (max-width: 767px) {
           padding: 0 30px;
        }
    }

    p {
        margin: 0;
    }
`;
