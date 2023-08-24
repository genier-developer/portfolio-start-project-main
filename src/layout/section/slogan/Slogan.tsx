import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <SectionTitle>"Bringing design to life with Code and Care"</SectionTitle>
                {/*<SectionTitle>"Weaving design and code into digital harmony"</SectionTitle>*/}
                <Button>Hire me</Button>
            </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
  min-height: 20vh;

`

