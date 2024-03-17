import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {S} from "./Skill_Styles"

const skillData = [
    {
        iconId: "html",
        title: 'HTML',
        viewBox: '0 0 32 32'
    },
    {
        iconId: "css",
        title: 'CSS',
        viewBox: '0 0 32 32'
    },
    {
        iconId: "js",
        title: 'JavaScript',
        viewBox: '0 0 32 32'
    },
    {
        iconId: "ts",
        title: 'TypeScript',
        viewBox: '0 0 32 32'
    },
    {
        iconId: "react",
        title: 'React',
        viewBox: '0 0 32 32'
    },
    {
        iconId: "redux",
        title: 'Redux',
        viewBox: '0 0 32 32'
    },
    {
        iconId: "firebase",
        title: 'Firebase',
        viewBox: '0 0 351 351'
    },
    {
        iconId: "material",
        title: 'Material UI',
        viewBox: '0 0 256 256'
    },
    {
        iconId: "sass",
        title: 'SASS',
        viewBox: '0 0 32 32'
    },
    {
        iconId: "eslint",
        title: 'ESLint',
        viewBox: '0 0 32 32'
    },
    {
        iconId: "postman",
        title: 'Postman',
        viewBox: '0 0 300 300'
    },

    // {
    //     iconId: "redux-saga",
    //     title: 'Redux Saga',
    //     viewBox: '0 0 64 52'
    // },
    // {
    //     iconId: "graph",
    //     title: 'GraphQL',
    //     viewBox: '0 0 24 24'
    // },
    {
        iconId: "figma",
        title: 'Figma',
        viewBox: '0 0 16 16'
    },
    {
        iconId: "git",
        title: 'Git',
        viewBox: '0 0 32 32'
    }
    ,
    {
        iconId: "styled",
        title: 'Styled component',
        viewBox: '0 0 32 32'
    },
    {
        iconId: "storybook",
        title: 'Story book',
        viewBox: '0 0 64 64'
    }
]
export const Skills: React.FC = () => {
    return (
        <S.Skills id={"skills"}>
            <Container>
                <SectionTitle>My skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={"space-around"}>
                    {skillData.map((s, index) => {
                        return (
                            <Skill key={index}
                                   iconId={s.iconId}
                                   title={s.title}
                                   viewBox={s.viewBox}/>
                        )
                    })}
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};




