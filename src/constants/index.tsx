import {ReactNode} from "react";

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
            src: '/assets/images/prof-landing.png',
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
            src: '/assets/images/prof-maps.png',
        },
    },
    {
        props: {
            heading: 'Партнеры',
            title: (<>В одном ряду с <br/> лидерами</>) as ReactNode,
            desc: 'Ассоциация с сильными брендами повышает доверие клиентов и инвесторов к вашей компании.',
            secondDesc: 'Увеличьте свой рост и базу клиентов',
            image: 'cup',
            mark: 'partner',
            position: -200,
            src: '/assets/images/prof-partner.png',
        },
    },
];

export const question = [
    {
        question: "Какие преимущества получит моя компания после вступления?",
        answer: "Ваша компания получит поток клиентов, и рост продаж. Так как вы будете отмечены на карте профсоюза, что дает большой прирост"
    },
    {
        question: "Сколько стоит вступление?",
        answer: "Вступление полностью бесплатное, вступайте прямо сейчас!"
    }
]