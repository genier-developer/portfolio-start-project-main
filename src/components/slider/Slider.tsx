import {S} from './Slider_Styles'
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './../../styles/slider.css'

type SlidePropsType = {
        text: string
        userName: string
    }

const Slide = (props: SlidePropsType) => {
    return (
        <S.Slide>
            <S.Text>{props.text}</S.Text>
            <S.Name>@{props.userName}</S.Name>
        </S.Slide>
    )

}
const items = [
    <Slide userName={"Yulia_Vernigora"}
           text={"У нас был устаревший дизайн сайта автошколы. Нужно было менять все в соответствии с современными тенденциями. Но у нас самих были очень смутные идеи. Мы обратились к Ольге. Ольга предложила свой вариант на основе наших пожеланий. Нам все очень понравилось. Все было сделано качественно и в срок. Следующее обновление сайта будем делать только у нее! Всем рекомендуем как надежного и ответственного партнера!"} />,
    <Slide userName={"Cedric_G."}
           text={"Olga was recommended to me by friends. She created a website for my company efficiently and quickly. Olga suggested that I improve the functionality of the site, but I refused because I was happy with my option. Olga completed all the work very quickly and was constantly in touch. I recommend!"} />,
    <Slide userName={"Anonym"}
           text={"Something else in the future"} />
];

export const Slider = () => (
    <S.Slider>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </S.Slider>

);