import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {TabLink} from "../../../../components/TabLink";


type WorkPropsType = {
    src: string,
    title: string,
    text: string,

}
export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            {/*<FlexWrapper>*/}
                <Image src={props.src} alt=""/>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <TabLink href="#">Demo</TabLink>
                <TabLink href="#">Code</TabLink>
            {/*</FlexWrapper>*/}

        </StyledWork>
    );
};

const StyledWork = styled.div`
  background-color: rgba(255, 255, 255, 0.2);

`

const Image = styled.img`
  width: 100%;
  height: 270px;
  object-fit: cover;
  opacity: 0.75;

`
const Title = styled.h3`
  color: ${theme.colors.font_dark};
  padding: 15px 0;
  text-transform: capitalize;
  font-size: 1.3rem;
  letter-spacing: 1px;
`

const Text = styled.p`
  color: ${theme.colors.font_dark};
  padding: 15px 0;
  font-size: 1.2rem;
`