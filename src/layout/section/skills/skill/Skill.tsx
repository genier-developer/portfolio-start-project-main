import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";


type SkillPropsType = {
    iconId: string,
    title: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <SkillTitle>{props.title}</SkillTitle>
        </StyledSkill>

    );
};

const StyledSkill = styled.div`
  width: 20%;
  background-color: rgba(170, 171, 184, 0.3);

`

const SkillTitle = styled.h3`
  color: #7FFF00;
  
`

