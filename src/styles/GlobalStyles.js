import { createGlobalStyle } from "styled-components";
import mosk from "../fonts/Mosk.ttf";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Quicksand', sans-serif;
    }

    body {
        background-color: var(--main-background);
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        color: var(--main-text);
        overflow-x: hidden;
        padding-top: 90px;
    }

    svg {
        flex-shrink: 0;
    }

    :root {
        --main-background: #FEFCFB;
        --main-text: #000000;
        --secundary-background: #EEEEEE;
        --tertiary-background: #E8E5E9;
        --accent-color:  #ED3C20;
        --accent-color-hover:  #353535;
    }

    @font-face {
        font-family: "Mosk";
        src: local("Mosk"), url(${mosk}) format("truetype");
        font-weight: bold;
    }
`;
