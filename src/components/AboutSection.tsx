"use client"

import SwiperWrapper from "@/components/ui/aboutSection/SwiperWrapper";
import React from "react";
import InformationCard from "@/components/ui/aboutSection/InformationCard";

const AboutSection = () => {
    return (
        <div className={'w-full bg-white flex justify-center'}>
            <div className={'max-w-[86.25rem] w-full flex flex-col items-center'}>
                <SwiperWrapper/>
                <div className={'w-full mt-20 relative overflow-hidden h-[75vh]'}>
                    <InformationCard text={{
                        heading: 'О нас',
                        title: <>Проект — <br/> Союз преимуществ</>,
                        desc: 'Мы — команда, которая поможет вашему бизнесу занять лидирующие позиции в своей нише, увеличить базу клиентов и количество продаж.',
                        secondDesc: 'Вступайте в наш проффсоюз',
                        image: 'hand',
                        mark: 'about'
                    }} position={0}/>
                    <InformationCard text={{
                        heading: 'Геокарта',
                        title: 'Ваша точка на геокарте профсоюза',
                        desc: 'Ваша компания будет отмечена на карте, которую используют [X] тысяч человек ежемесячно.',
                        secondDesc: 'Отмечайтесь на карте проффсоюза',
                        image: 'map',
                        mark: 'maps'
                    }} position={-100}/>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;