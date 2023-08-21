import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/Portrait-photo-fotor-20230731151339.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";


export const Main = () => {
    return (
        <div>
            <StyledMain>
                <FlexWrapper align={"center"} justify={"space-around"}>
                    <div>
                        <MainName>Olga Genier</MainName>
                        <MainTitle>Frontend developer</MainTitle>
                        <Location>Ekaterinburg, Russia</Location>
                    </div>
                    <Photo src={photo} alt=""/>

                </FlexWrapper>

            </StyledMain>
        </div>

    );
};

const Photo = styled.img`
  width: 190px;
  height: 240px;
  object-fit: cover;
`
const StyledMain = styled.div`
  min-height: 50vh;
  background-color: #2E9CCA;
`

const MainTitle = styled.h1`
  color: #464866;
`

const MainName = styled.h2`
  color: #464866;
  font-size: 3rem;
`

const Location = styled.span`
  color:#464866;
  font-size: 1.2rem;
`