import { createGlobalStyle } from "styled-components"
import "@fontsource/poppins/100.css"
import "@fontsource/poppins/200.css"
import "@fontsource/poppins/300.css"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/500.css"

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        font-family: ${({theme}) => theme.fonts.font1};
        font-weight: 400;
        background: ${({theme}) => theme.background};
        color: ${({theme}) => theme.text};
    }
`