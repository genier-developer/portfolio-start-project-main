import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";

const items = ['Home', 'Skills', 'Works', 'Testimonials', 'Contact']

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: #29648A;
  box-shadow: 0px 20px 10px rgba(0, 0, 0, 0.1);
  //display: flex;
  padding: 20px 0;
  position: sticky;
  top: 0;
  z-index: 999;
  //left: 0;
  //right: 0;
`