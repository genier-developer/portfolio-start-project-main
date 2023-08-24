import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {FlexWrapper} from "../../../../components/FlexWrapper";


type SkillPropsType = {
    iconId: string,
    title: string,
    width?: string,
    height?: string
    viewBox?: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={"column"} align={"center"}>
                <IconWrapper>
                    <Icon iconId={props.iconId} viewBox={props.viewBox}/>
                </IconWrapper>
                <SkillTitle>{props.title}</SkillTitle>
            </FlexWrapper>
        </StyledSkill>

    );
};

const StyledSkill = styled.div`
  width: 200px;
  padding: 50px 10px 10px;
  display: block;

`
const IconWrapper = styled.div`
//position: relative;
//  &::before {
//    content: "";
//    display: inline-block;
//    width: 70px;
//    height: 70px;
//    border-radius: 35px;
//    background-color: rgba(255, 255, 255, 0.2);
//    position: absolute;
//    left: -25%;
//    top: -10%;
//  }
`

const SkillTitle = styled.h3`
  color: ${theme.colors.font_light};
  margin: 10px 15px;
  letter-spacing: 1px;

`

