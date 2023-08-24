import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
// import {StyledLanguage} from "./language/Language";
import {Language} from "./language/Language";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";


export const Languages = () => {
    return (
        <StyledLanguages>
            <SectionTitle>Languages</SectionTitle>
            <Container>
                <FlexWrapper direction={'column'}>
                    <Language name={'Russian (native)'}/>
                    <Language name={'English'}/>
                    <Language name={'French'}/>
                </FlexWrapper>
            </Container>
        </StyledLanguages>
    );
};

const StyledLanguages = styled.section`
  min-height: 50vh;
  background-color: #C5CBE3;

`

// const SectionTitle = styled.h3`
//
//   text-align: center;
//   padding: 20px 0;
//   font-size: 2rem;
// `