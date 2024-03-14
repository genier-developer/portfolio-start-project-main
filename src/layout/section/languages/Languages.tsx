import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Language} from "./language/Language";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {S} from './Languages_Styles'

type LanguagesType = {
    languageItems: Array<string>
}

const langData = [
    {
        lang: "Russian",
        level: 5
    },
    {
        lang: "English",
        level: 3
    },
    {
        lang: "French",
        level: 2
    },
]

export const Languages: React.FC<LanguagesType> = (props: LanguagesType) => {
    return (
        <S.Languages id={'languages'}>
            <SectionTitle>Languages</SectionTitle>
            <Container>
                <FlexWrapper direction={'column'} align={"center"} justify={"center"}>
                    <S.LanguageItem>

                        {langData.map((l, index) => {
                            return <Language lang={l.lang} level={l.level}/>
                        })}

                    </S.LanguageItem>
                </FlexWrapper>
            </Container>
        </S.Languages>
    );
}