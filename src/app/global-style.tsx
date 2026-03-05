import colors from "@/lib/color";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: rgba(${colors.background});
        padding: 0;
        color: white;
        box-sizing: border-box;
        font-family: var("--font-space-grotesk");
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
    }
`;

export default GlobalStyle;
