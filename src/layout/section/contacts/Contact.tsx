import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from "./Contacts_Styles"

export const Contact: React.FC = () => {
    return (
        <S.Contact id={"contact"}>
            <Container>
                <SectionTitle>Contact me</SectionTitle>
                <S.Form>
                    <S.Field placeholder={"name"}></S.Field>
                    <S.Field placeholder={"subject"}></S.Field>
                    <S.Field placeholder={"message"} as={"textarea"}></S.Field>
                    <Button type={"submit"}>Send message</Button>
                </S.Form>
            </Container>
        </S.Contact>
    );
};


