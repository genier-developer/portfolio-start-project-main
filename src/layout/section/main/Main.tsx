import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/Photo.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";


export const Main = () => {
    return (
        <div>
            <StyledMain>
                <Container>
                    <FlexWrapper align={"center"} justify={"center"} gap={"250px"}>
                        <div>
                            <MainName>Olga Genier</MainName>
                            <MainTitle>Frontend developer</MainTitle>
                            <Location>Ekaterinburg, Russia</Location>
                        </div>
                        <PhotoWrapper>
                            <Photo src={photo} alt=""/>
                        </PhotoWrapper>

                    </FlexWrapper>
                </Container>
            </StyledMain>
        </div>

    );
};

const Photo = styled.img`
  width: 230px;
  height: 290px;
  object-fit: cover;
  border-radius: 10px;
`
const StyledMain = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.primaryBg};
  display: flex;
`

const MainTitle = styled.h1`
  color: #464866;
  margin: 20px 0;
`

const MainName = styled.h2`
  color: #464866;
  font-size: 3rem;
`

const Location = styled.span`
  color: #464866;
  font-size: 1.2rem;
`
const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    width: 240px;
    height: 300px;
    border: 5px solid ${theme.colors.secondaryBg};
    border-radius: 10px;

    position: absolute;
    top: -25px;
    left: 15px;
    z-index: -1;
  }
`