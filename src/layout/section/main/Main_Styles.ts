import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Photo = styled.img`
  width: 230px;
  height: 290px;
  object-fit: cover;
  border-radius: 10px;
  
`

const Main = styled.div`
  min-height: 90vh;
  background-color: ${theme.colors.primaryBg};
  display: flex;
  
`

const MainTitle = styled.h1`
  color: ${theme.colors.font_dark};
  margin: 20px 0;
  font-size: clamp(1rem, 2vw + 1rem, 1.875rem);
  
  p {
    display: none;
  }
  
`

const MainName = styled.h2`
  color: ${theme.colors.font_dark};
  letter-spacing: 2px;
  font-size: clamp(2.25rem, 2vw + 1.5rem, 3.25rem);
`

const Location = styled.span`
  color: ${theme.colors.font_dark};
  font-size: 1.2rem;
  display: inline-block;
  
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    width: 240px;
    height: 300px;
    border: 5px solid ${theme.colors.secondaryBg};
    border-radius: 10px;

    position: absolute;
    top: -25px;
    left: 15px;
    z-index: -1;

}`

const WrapperLocation = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

`

export const S = {
    Main,
    MainName,
    MainTitle,
    PhotoWrapper,
    Photo,
    WrapperLocation,
    Location
}