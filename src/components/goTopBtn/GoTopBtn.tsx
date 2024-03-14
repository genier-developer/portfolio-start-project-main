import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

export const GoTopBtn: React.FC = () => {
    return (
        <StyledGoTopBtn onClick={() => {}}>
            <Icon iconId={"arrow_up"} viewBox={"0 0 24 24"} width={"16"} height={"16"}/>
        </StyledGoTopBtn>
    );
};

const StyledGoTopBtn = styled.button`
  background-color: rgba(41, 100, 138, .1);
  border: 2px solid #c5f87dd1;
  position: fixed;
  right: 30px;
  bottom: 30px;
  border-radius: 15%;
  
`