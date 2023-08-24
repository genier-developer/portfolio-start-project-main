import React from 'react';
import styled from "styled-components";

type LanguagePropsType = {
    name: string
}
export const Language = (props: LanguagePropsType) => {
    return (
        <StyledLanguage>
            <span>{props.name}</span>
        </StyledLanguage>
    );
};

const StyledLanguage = styled.h4`
  //color: #464866;
  //font-size: 1.3rem;
  //margin: 0 auto;
`



