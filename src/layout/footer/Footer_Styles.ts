import {theme} from "../../styles/Theme";
import styled from "styled-components";

const Footer = styled.footer`
  background-color: ${
    theme.colors.secondaryBg
  };
  
  text-align: center;
  padding: 40px 0;
  letter-spacing: 3px;
`

const SocialIconsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: 30px 0;

`

const SocialIconLink = styled.a`
  color: ${
    theme.colors.font_light
};

  &:hover {
    cursor: pointer;
    color: ${theme.colors.accent_bright};
  }
`

const Copyright = styled.small`
  @media ${theme.media.mobile} {
    font-size: 11px;
  }
`

export const S = {
    Copyright,
    SocialIconLink,
    SocialIconsList,
    Footer
}