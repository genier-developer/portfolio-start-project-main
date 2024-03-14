import {theme} from "../../styles/Theme";
import styled from "styled-components";

const Slider = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  //border: 1px solid red;

`

const Slide = styled.div`
  text-align: center;


`

const Text = styled.p`
  letter-spacing: 1px;
  font-size: clamp(1rem, 2vw + 1rem, 1.25rem);
  line-height: 1.5;
  color: ${theme.colors.font_light};
`

const Name = styled.div`
  font-weight: bold;
  font-size: clamp(1rem, 2vw + 1rem, 1.25rem);
  margin-top: 30px;
  margin-bottom: 40px;
  text-transform: uppercase;
  color: ${theme.colors.font_light};

`

const Pagination = styled.div`
  span {
    display: inline-block;
    text-align: center;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: ${theme.colors.font_dark};

    & + span {
      margin-left: 5px;
    }

    &.active {
      width: 20px;
      background-color: ${theme.colors.accent_bright};
    }
  }

`

export const S = {
    Pagination,
    Name,
    Text,
    Slide,
    Slider
}