import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";

export const Footer = () => {
    return (
        <StyledFooter>
            <Name>Olga Genier</Name>
            <SocialIconList>
                <SocialIconLink>
                    {/*<Icon iconId={'github'}/>*/}
                </SocialIconLink>
            </SocialIconList>

        </StyledFooter>
    );
};

const Name = styled.p`

`
const StyledFooter = styled.footer`
    
    `
const SocialIconList = styled.div`
    
 `
const SocialIconLink = styled.link`
    `