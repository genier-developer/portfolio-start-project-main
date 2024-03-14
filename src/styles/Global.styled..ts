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
    cursor: pointer;
    font-weight: bold;
    color: ${theme.colors.accent_bright};
    padding: 10px;
    position: relative;
    z-index: 0;
    
    &:hover{
      color: ${theme.colors.font_dark};
      font-weight: bold;
      &::before {
        content: "";
        display: inline-block;
        width: 100%;
        height: 100%;

        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: -1;
      }
    }
    
  }

  section {
    padding: 100px 0;
    
    @media ${theme.media.mobile} {
      padding: 80px 0;
    }
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
    font-size: clamp(1.125rem, 1vw + 1rem, 1.5rem);
    font-weight: bold;
    letter-spacing: 1px;
  }

  p {
    line-height: 1.4;
  }

  h3 {
    //font-size: 1.3rem;
  }
`