"use client"

import SwiperWrapper from "@/components/ui/aboutSection/SwiperWrapper";
import React, {useState, useRef, useEffect} from "react";
import InformationCard from "@/components/ui/aboutSection/InformationCard";
import {informationCards} from "@/constants";
import gsap from "gsap";

const AboutSection = () => {
    const [isCurrentSlide, setIsCurrentSlide] = useState('about');
    const slideRef = useRef(null);
    const switcherRef = useRef(null);

    const animateSlide = (slideName: string) => {
        switch (slideName) {
            case 'about':
                gsap.to(slideRef.current, {translateX: '0', duration: 0.5})
                gsap.to(switcherRef.current, {translateX: '0', width: '4.8rem', duration: 0.3})
                break;
            case 'map':
                gsap.to(slideRef.current, {translateX: '-114.5%', duration: 0.5})
                gsap.to(switcherRef.current, {translateX: '4.375rem', width: '6.875rem', duration: 0.3})
                break;
            case 'partner':
                gsap.to(slideRef.current, {translateX: '-214.5%', duration: 0.5})
                gsap.to(switcherRef.current, {translateX: '11.0625rem', width: '6.875rem', duration: 0.3})
                break;
        }
    }

    const handleButtonClick = (slideName: string) => {
        setIsCurrentSlide(slideName);
    }

    useEffect(() => {
        animateSlide(isCurrentSlide);
    }, [isCurrentSlide]);

    return (
        <div className={'w-full bg-white flex justify-center relative'}>
            <div className={'max-w-[86.25rem] w-full flex flex-col items-center'}>
                <SwiperWrapper onButtonClick={handleButtonClick} ref={switcherRef}/>
                <div className={'w-full overflow-hidden'}>
                    <div className={'w-full mt-20 relative h-[80vh]'} ref={slideRef}>
                        {informationCards.map((card, index) => (
                            <InformationCard props={card.props} key={index}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;