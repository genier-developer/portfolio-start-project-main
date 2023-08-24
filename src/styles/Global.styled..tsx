import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  body {
    margin: 0;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: none;
  }

  section {
    padding: 100px 0;
  }

  section:nth-of-type(odd) {
    background-color: ${theme.colors.secondaryBg};
    color: ${theme.colors.font_dark}
  }

  section:nth-of-type(even) {
    background-color: ${theme.colors.primaryBg};
    color: ${theme.colors.font_light}
  }

  a {
    text-decoration: none;
    color: ${theme.colors.font_dark};
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: 1px;
  }
`