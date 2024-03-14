import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {S} from '../Languages_Styles'

type LanguageProps = {
    lang: string,
    level?: number
}

export const Language: React.FC<LanguageProps> = (props: LanguageProps) => {
    const levelStars = new Array(props.level).fill(
        <Icon iconId={"star"} width={"21"} height={"21"} viewBox={"0 0 52 52"}/>
    )
    return (
        <S.Language>
            <S.WrapperLanguage>
                <S.Title>{props.lang}</S.Title>
                {/*<span>{props.level}</span>*/}
                {levelStars}
            </S.WrapperLanguage>
        </S.Language>
    );
};