import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
    ${reset}
    html {
        box-sizing: border-box;
        font-size: 62.5%;
        font-family: 'Noto Sans JP', sans-serif;
    }
    body {
        margin: 0;
    }
    a {
        text-decoration: none;
    }
    a:hover {
        opacity: 0.8;
    }
`

export default GlobalStyle