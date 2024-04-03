import React from 'react';
import {Link} from "../../../../components/Link";
import {Button} from "../../../../components/Button";
import {S} from "../Works_Styles"


type WorkPropsType = {
    src: string,
    title: string,
    text: string,
    href: string,
    code: string


}
export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.src} alt="project"/>
                <Button><a href={props.href} >View project</a></Button>
            </S.ImageWrapper>

            <S.TextWrapper>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <Link href={props.href} target={'_blank'}>Demo</Link>
                <Link href={props.code} target={'_blank'}>Code</Link>
            </S.TextWrapper>
        </S.Work>
    );
};
