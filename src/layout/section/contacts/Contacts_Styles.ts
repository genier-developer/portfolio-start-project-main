import {theme} from "../../../styles/Theme";
import styled from "styled-components";
import {Button} from "../../../components/Button";

const Contact = styled.section``
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 540px;
  width: 100%;
  gap: 16px;
  margin: 0 auto;

  textarea {
    resize: none;
    height: 150px;
  }
  
 ${Button} {
   margin-top: 42px;
 }

  ${Button}:hover {
    background-color: ${theme.colors.accent_bright};
  }
`
const Field = styled.input`
  width: 100%;
  font-family: "Verdana", sans-serif;
  background-color: ${theme.colors.font_light};
  padding: 7px 15px;
  border-color: ${theme.colors.primaryBg};
  font-size: 16px;
  
  &::placeholder {
    text-transform: capitalize;
    color: ${theme.colors.accent_dark}
  }
  
  &:focus-visible {
  outline: 1px solid ${theme.colors.font_dark}
}
`

export const S = {
    Contact,
    Form,
    Field
}