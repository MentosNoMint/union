import { ReactNode } from "react";

export const informationCards = [
    {
        props: {
            heading: 'О нас',
            title: (<>Проект — <br/> Союз преимуществ</>) as ReactNode,
            desc: 'Мы — команда, которая поможет вашему бизнесу занять лидирующие позиции в своей нише, увеличить базу клиентов и количество продаж.',
            secondDesc: 'Вступайте в наш проффсоюз',
            image: 'hand',
            mark: 'about',
            position: 0,
        },
    },
    {
        props: {
            heading: 'Геокарта',
            title: (<>Ваша точка на <br/>геокарте профсоюза</>) as ReactNode,
            desc: 'Ваша компания будет отмечена на карте, которую используют [X] тысяч человек ежемесячно.',
            secondDesc: 'Отмечайтесь на карте проффсоюза',
            image: 'map',
            mark: 'map',
            position: -100,
        },
    },
    {
        props: {
            heading: 'Партнеры',
            title: (<>В одном ряду с <br/> лидерами</>) as ReactNode,
            desc: 'ассоциация с сильными брендами повышает доверие клиентов и инвесторов к вашей компании.',
            secondDesc: 'Увеличьте свой рост и базу клиентов',
            image: 'cup',
            mark: 'partner',
            position: -200,
        },
    },
];