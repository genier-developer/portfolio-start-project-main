import React from 'react';
import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li>
                    <a href="">Skills</a>
                </li>
                <li>
                    <a href="">Works</a>
                </li>
                <li>
                    <a href="">Testimonials</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul{
    display: flex;
    gap: 30px;
    list-style: none;
    &a {
      color: #FFFF00;
    }
  }
`

