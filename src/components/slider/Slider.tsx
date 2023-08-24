import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide></Slide>
                <Text>Something written</Text>
                <Name>@Julia</Name>
            </FlexWrapper>
            <Pagination>
                <span></span>
                <span></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
  border: 1px solid #2b3de2;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Slide = styled.div`
  text-align: center;
  
`

const Text = styled.p`

`
const Name = styled.span`

`

const Pagination = styled.div`

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 5px;
    border-radius: 5px;
    background-color: #464866;;
  }

`