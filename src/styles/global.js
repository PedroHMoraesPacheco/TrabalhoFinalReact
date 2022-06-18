import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #FFF;
    }

    body, input, textarea, button, label, select, tr {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong, tr {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
    }

    button, select {
        cursor: pointer;
        filter: brightness(1);
        transition: filter 0.2s;
        &:hover {
            filter: brightness(0.9)
        }
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }



`;