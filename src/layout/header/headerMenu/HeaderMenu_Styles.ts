import {theme} from "../../../styles/Theme";
import styled, {css} from "styled-components";

const ListItem = styled.li`

`
const Link = styled.a`
  color: ${theme.colors.accent_bright};
  font-weight: bold;
  font-size: clamp(1rem, 1vw + 1rem, 1.125rem);

  &:hover {
    text-decoration: underline;
   
  }
  
  
`
const MobileMenu = styled.nav`
  display: none;
  
  @media ${theme.media.tablet} {
    display: block;
  }
`
const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  width: 200px;
  height: 200px;
  top: -100px;
  right: -100px;
  z-index: 9999999;

  span {
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.accent_bright};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    
    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.accent_bright};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}
    }  
      &::after {
        content: "";
        display: block;
        width: 24px;
        height: 2px;
        background-color: ${theme.colors.accent_bright};
        position: absolute;
        transform: translateY(10px);

        ${props => props.isOpen && css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
          width: 36px;
        `}
      
      }
    }
`
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(41, 100, 138, 0.9);
  display: none;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
  
  ul {
    display: flex;
    gap: 30px;
    list-style: none;
    flex-direction: column;
    align-items: center;
  }
`

const DesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    list-style: none;
  }
`
export const S = {
    Link,
    ListItem,
    MobileMenuPopup,
    BurgerButton,
    MobileMenu,
    DesktopMenu
}