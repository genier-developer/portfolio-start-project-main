import styled from "styled-components";
import {theme} from "../styles/Theme";

export const TabLink = styled.a`
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px;
  position: relative;
  
  &:hover {
    &::before {
      height: 5px;
    }
  }
  &::before {
    content: "";
    display: inline-block;
    
    position: absolute;
    background-color: ${theme.colors.accent_bright};
    bottom: 0;
    left: 10px;
    right: 10px;
    //z-index: -1 ;
  }
   
`