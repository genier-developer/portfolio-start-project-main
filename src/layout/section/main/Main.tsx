import React from 'react';
import photo from "../../../assets/images/Photo.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {Icon} from "../../../components/icon/Icon";
import {S} from "./Main_Styles"
import Typewriter from 'typewriter-effect';
export const Main: React.FC = () => {
    return (
        <div>
            <S.Main id={'home'}>
                <Container>
                    <FlexWrapper justify={"space-evenly"} align={"center"} wrap={"wrap"}>
                        <div>
                            <S.MainName>Olga Genier</S.MainName>
                            <S.MainTitle>
                                <p>Frontend developer</p>
                                <Typewriter
                                    options={{
                                        strings: ['Frontend developer'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </S.MainTitle>
                            <S.WrapperLocation>
                                <Icon iconId={"placeholder"} width={"24px"} height={"24px"}/>
                                <S.Location>Ekaterinburg, Russia</S.Location>
                            </S.WrapperLocation>

                        </div>
                        <S.PhotoWrapper>
                            <S.Photo src={photo} alt=""/>
                        </S.PhotoWrapper>
                    </FlexWrapper>
                </Container>
            </S.Main>
        </div>
    );
};