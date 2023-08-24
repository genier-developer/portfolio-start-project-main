import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={"space-around"}>
                    <Skill iconId={"html"} title={'HTML'} viewBox={'0 0 32 32'}/>
                    <Skill iconId={"css"} title={'CSS'} viewBox={'0 0 32 32'}/>
                    <Skill iconId={"js"} title={'JavaScript'} viewBox={'0 0 32 32'}/>
                    <Skill iconId={"ts"} title={'TypeScript'} viewBox={'0 0 32 32'}/>
                    <Skill iconId={"react"} title={'React'} viewBox={'0 0 32 32'}/>
                    <Skill iconId={"redux"} title={'Redux'} viewBox={'0 0 32 32'}/>
                    <Skill iconId={"redux-saga"} title={'Redux Saga'} viewBox={'0 0 48 48'}/>
                    <Skill iconId={"graph"} title={'GraphQL'} viewBox={'0 0 24 24'}/>
                    <Skill iconId={"figma"} title={'Figma'} viewBox={'0 0 16 16'}/>
                    <Skill iconId={"git"} title={'Git'} viewBox={'0 0 32 32'}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`

`
