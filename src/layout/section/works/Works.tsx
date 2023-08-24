import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import socialImg from "../../../assets/images/social_net.webp"
import crcg from "../../../assets/images/crcg.webp"
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {TabMenu} from "./tabMenu/TabMenu";

const worksItems = ["All", "Landing page", "React", "spa"]
export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify="space-between">
                    <Work
                        src={socialImg}
                        title={"Social network"}
                        text={"This is a social network"}/>
                    <Work
                        src={crcg}
                        title={"Landing page"}
                        text={"This is a landing page"}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>

    );
};

const StyledWorks = styled.section`
  // background-color: ${theme.colors.font_dark};


`
