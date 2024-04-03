import React from 'react';
import {S} from "../HeaderMenu_Styles"

const items = [
    {
        title: 'Home',
        href: 'home'
    },
    {
        title: 'Skills',
        href: 'skills'
    },
    {
        title: 'Works',
        href: 'works'
    },
    {
        title: 'Languages',
        href: 'languages'
    },
    // {
    //     title: 'Testimonials',
    //     href: 'testimonials'
    // },
    {
        title: 'Contact',
        href: 'contact'
    }
]

export const Menu: React.FC = () => {
    return (
        <ul>
            {items.map((item, index) => {
                return <S.ListItem key={index}>
                    <S.Link href={`#${item.href}`}>{item.title}</S.Link>
                </S.ListItem>
            })}
        </ul>
    );
};

