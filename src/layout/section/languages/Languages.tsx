import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import Language from "./language/Language";


export const Languages = () => {
    return (
        <StyledLanguages>
            <LanguageTitle>Languages</LanguageTitle>
            <FlexWrapper wrap={'wrap'} justify={"space-between"} direction={'column'}>
                <Language name={'Russian'}/>
                <Language name={'English'}/>
                <Language name={'French'}/>
            </FlexWrapper>
        </StyledLanguages>
    );
};

const StyledLanguages = styled.section`
  min-height: 70vh;
  background-color: #A8D0E6;
`

const LanguageTitle = styled.h3`
  color: #29648A;
`