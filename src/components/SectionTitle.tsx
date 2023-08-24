import styled from "styled-components";
import {theme} from "../styles/Theme";

export const SectionTitle = styled.h2`
  color: ${theme.colors.font_light};
  text-align: center;
  //padding: 20px 0;
  font-size: 2rem;
  letter-spacing: 5px;
  position: relative;
  margin-bottom: 90px;
  
  &::before {
    content: "";
    display: inline-block;
    width: 55px;
    height: 1px;
    background-color: ${theme.colors.accent_bright};
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -30px;
  }
`