import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";

export const Slogan: React.FC = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <SectionTitle>"Bringing design to life with Code and Care"</SectionTitle>
                    {/*<SectionTitle>"Weaving design and code into digital harmony"</SectionTitle>*/}
                    <Button>Hire me</Button>
                </FlexWrapper>

            </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
  ${SectionTitle} {
    line-height: 1.7;
    font-size: clamp(1.25rem, 2vw + 1rem, 1.75rem);
  }
  
  ${Button}:hover {
    background-color: ${theme.colors.accent_bright};
  }
`

