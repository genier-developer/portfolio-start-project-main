import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {S} from './Footer_Styles'
import {IconWrapper} from "../section/skills/Skill_Styles";

export const Footer = () => {
    const handleGitClick = ()=>{
        window.open ('https://github.com/genier-developer', '_blank')
    }
    const handleLinkedClick = ()=>{
        window.open ('https://www.linkedin.com/feed/', '_blank')
    }
    const handleTelegramClick = ()=>{
        window.open ('https://www.t.me/OGenier', '_blank')
    }

    return (
        <S.Footer>
            <S.SocialIconsList>

                <S.SocialIconLink>
                    <IconWrapper onClick={handleGitClick}>
                        <Icon iconId={"github"} width={"48"} height={"48"} viewBox={"0 0 100 100"} />
                    </IconWrapper>
                </S.SocialIconLink>

                <S.SocialIconLink >
                    <IconWrapper onClick={handleLinkedClick}>
                        <Icon iconId={"linked"} width={"52"} height={"52"} viewBox={"0 0 52 52"}/>
                    </IconWrapper>
                </S.SocialIconLink>

                <S.SocialIconLink >
                    <IconWrapper onClick={handleTelegramClick}>
                    <Icon iconId={"telegram"} width={"56"} height={"56"} viewBox={"0 0 24 24"}/>
                    </IconWrapper>
                </S.SocialIconLink>

            </S.SocialIconsList>
            <S.Copyright>© 2024 Olga Genier. All Rights Reserved</S.Copyright>
        </S.Footer>
    );
};