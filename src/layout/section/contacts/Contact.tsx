import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";

export const Contact = () => {
    return (
        <StyledContact>
            <SectionTitle>Contact me</SectionTitle>
            <StyledForm>
                <StyledField placeholder={"name"}></StyledField>
                <StyledField placeholder={"subject"}></StyledField>
                <StyledField placeholder={"message"} as={"textarea"}></StyledField>
                <Button type={"submit"}>Send message</Button>
            </StyledForm>

        </StyledContact>
    );
};

const StyledContact = styled.section`
  min-height: 40vh;
  background-color: #f19b9b;
`

const StyledForm = styled.form`
 display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  gap: 10px;
  margin: 0 auto;
`
const StyledField = styled.input`

`
