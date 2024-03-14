import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Language = styled.h3`

`

const WrapperLanguage = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 5px;
  align-items: flex-start;
`

const Title = styled.span`
  display: inline-block;
  width: 110px;
  height: 30px;
  color: ${theme.colors.font_light};
`

const Languages = styled.section`

`

const LanguageItem = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;

`

export const S = {
    Title,
    WrapperLanguage,
    Language,
    Languages,
    LanguageItem
}