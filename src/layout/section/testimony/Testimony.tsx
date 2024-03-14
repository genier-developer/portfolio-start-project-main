import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";


export const Testimony: React.FC = () => {
    return (
        <StyledTestimony id={'testimonials'}>
            <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={'column'} align={'center'}>
                    <Icon iconId={'testimonial'} viewBox={"0 0 50 50"}/>
                    <Slider/>
                </FlexWrapper>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`

`