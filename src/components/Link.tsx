import styled, {css} from "styled-components";
import {theme} from "../styles/Theme";

export const Link = styled.a<{active?: boolean}>`
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  position: relative;
  padding: 10px 0;
  z-index: 0;
  color: ${theme.colors.font_light};
  
  &:hover {
    &::before {
      height: 5px;
    }
  }
  
  &::before {
    content: "";
    display: inline-block;
    background-color: ${theme.colors.accent_bright};
    position: absolute;
    bottom: 2px;
    left: 0;
    right: 0;
    z-index: -1;
    
    ${props => props.active && css<{active?: boolean}>`
    height: 5px;
    `}
  }
`