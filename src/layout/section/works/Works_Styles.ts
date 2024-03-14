import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Link} from "../../../components/Link";
import {Button} from "../../../components/Button";

const Works = styled.section`
  color: ${theme.colors.font_dark};

  ${FlexWrapper} {
    gap: 30px;
  }
`

const Work = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  
  width: 330px;
  flex-grow: 1;

  ${Link} {
    padding: 10px 0;
  
    & + ${Link} {
      margin-left: 10px;
    }
  @media ${theme.media.desktop} {
    max-width: 540px;}
  }
`

const ImageWrapper = styled.div`
  position: relative;

  ${Button} {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);

  }

  &:hover {
    &::before {
      opacity: 1;
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(8px);
    }

  ${Button} {
    opacity: 1;
    color: ${theme.colors.font_dark};
    background-color: ${theme.colors.accent_bright};
}
    
`

const Image = styled.img`
  width: 100%;
  height: 270px;
  object-fit: cover;
`

const Title = styled.h3`
  color: ${theme.colors.font_dark};
  text-transform: uppercase;
  font-size: clamp(1rem, 1vw + 1rem, 1.125rem);
  letter-spacing: 1px;
`

const TextWrapper = styled.div`
  padding: 25px 20px;
`

const Text = styled.p`
  color: ${theme.colors.font_dark};
  font-size: 1.2rem;
  margin: 15px 0 10px;
`

const TabMenu = styled.nav`
  ul {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    //border: 2px solid red;
    margin: 0 auto 40px;


    ${Link} {
      padding: 10px 0;

      & + ${Link} {
        margin-left: 10px;
      }
      
    @media ${theme.media.mobile} {
      //font-size: clamp(1.25rem, 1vw + 1rem, 1.625rem);
    }
  }
`

const ListItem = styled.li`

`

export const S = {
    Works,
    Work,
    Text,
    Title,
    Image,
    ImageWrapper,
    TextWrapper,
    TabMenu,
    ListItem
}