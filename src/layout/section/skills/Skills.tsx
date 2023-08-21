import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My skills</SectionTitle>
            <FlexWrapper wrap={'wrap'} justify={"space-between"}>
                <Skill iconId={"html"} title={'HTML'}/>
                <Skill iconId={"css"} title={'CSS'}/>
                <Skill iconId={"js"} title={'JavaScript'}/>
                <Skill iconId={"ts"} title={'TypeScript'}/>
                <Skill iconId={"react"} title={'React'}/>
                <Skill iconId={"redux"} title={'Redux'}/>
                <Skill iconId={"redux-saga"} title={'Redux Saga'}/>
                <Skill iconId={"graph"} title={'GraphQL'}/>
                <Skill iconId={"figma"} title={'Figma'}/>
                <Skill iconId={"git"} title={'Git'}/>

            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: #29648A;
  min-height: 100vh;

`
