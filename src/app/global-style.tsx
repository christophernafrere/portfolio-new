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

    button {
        font-family: var("--font-space-grotesk");
    }

    

     p {
        margin: 0;
        line-height: 1.3rem;
        letter-spacing: 0.05rem;
    }
`;

export default GlobalStyle;
