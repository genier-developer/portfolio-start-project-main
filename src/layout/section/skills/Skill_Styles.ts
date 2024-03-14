import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Skills = styled.section`
    
`
export const Skill = styled.div`
  width: 200px;
  padding: 50px 10px 10px;
  display: block;
  @media ${theme.media.mobile} {
    width: 150px;
  }

`
export const IconWrapper = styled.div`

`

const SkillTitle = styled.h3`
  color: ${theme.colors.font_light};

  margin: 10px 15px;
  letter-spacing: 1px;
  text-align: center;
`
export const S = {
    Skills,
    Skill,
    IconWrapper,
    SkillTitle
}