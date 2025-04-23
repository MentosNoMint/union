"use client"

import Image from "next/image";
import React, {useRef} from "react";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from "gsap";
import Progress from "@/components/ui/heroSection/Progress";
import Profit from "@/components/ui/heroSection/Profit";
import Particle from "@/components/ui/heroSection/Particle";
import Advantages from "@/components/Advantages";
import {RemToPx} from "@/utils/RemToPx";
import Link from "next/link";

const HeroSection = () => {

    interface ExtendedDivElement extends HTMLDivElement {
        _isRotating?: boolean;
    }

    const cardRef = useRef<ExtendedDivElement>(null);
    const whiteLineRef = useRef(null);
    const triggerBlockRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerBlockRef.current,
                scrub: true,
                start: '10% center',
                end: '19% center',
            },
        })

        const whiteBackGround = gsap.to(triggerBlockRef.current, {
            backgroundColor: 'white',
            duration: 2,
            scrollTrigger: {
                trigger: triggerBlockRef.current,
                start: '20% center',
                end: '25% center',
                scrub: true,
            }
        })

        const card = gsap.to(cardRef.current, {
                translateY: 90,
                scale: 1.1,
                scrollTrigger: {
                    trigger: cardRef.current as gsap.DOMTarget,
                    start: '170% center',
                    end: `+=${RemToPx(206.25)} 60%`,
                    pin: true,
                    scrub: true,
                    onUpdate: (self) => {
                        if (self.progress >= 0.18) {
                            if (!cardRef.current!._isRotating) {
                                cardRef.current!._isRotating = true;

                                gsap.to(cardRef.current, {
                                    rotationX: 360,
                                    rotationZ: 360,
                                    duration: 6,
                                    repeat: -1,
                                    ease: "none",
                                    transformOrigin: "center center",
                                });
                            }
                        } else {

                            if (cardRef.current!._isRotating) {
                                cardRef.current!._isRotating = false;

                                gsap.killTweensOf(cardRef.current, "rotationX,rotationZ");

                                gsap.to(cardRef.current, {
                                    rotationX: 0,
                                    rotationZ: 0,
                                    duration: 1.5,
                                    ease: "power2.inOut",
                                    transformOrigin: "center center",
                                });
                            }
                        }
                    }
                }
            }
        );

        tl.to(cardRef.current, {
            duration: 1,
            translateY: "-=100"
        })
        tl.to(whiteLineRef.current, {
            zIndex: 0,
            duration: 0,
            delay: 0.4
        }, '<')
        tl.to(cardRef.current, {
            duration: 1,
            translateY: 0
        })

        return () => {
            card.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            whiteBackGround.kill();
        };
    })


    return (
        <div className={'bg-[#f2f2f2] w-full flex flex-col items-center'} ref={triggerBlockRef}>
            <div
                className={'w-full bg-white h-[47.25rem] rounded-[2.75rem] max-w-[88.75rem] mt-7 flex flex-col items-center z-10'}>
                {/*<div className={'flex items-center gap-6 mt-9'}>*/}
                {/*    <div className={'flex'}>*/}
                {/*        <div*/}
                {/*            className={'rounded-full bg-[#F6F8FA] w-[3.25rem] h-[3.25rem] flex justify-center items-center'}>*/}
                {/*            <Image src={'/assets/images/icon-company-1.svg'} alt={'icon-company'} width={56}*/}
                {/*                   height={48} style={{width: '3.5rem', height: '3rem'}}/>*/}
                {/*        </div>*/}
                {/*        <div*/}
                {/*            className={'rounded-full bg-[#F6F8FA] w-[3.25rem] h-[3.25rem] -ml-4 flex justify-center items-center'}>*/}
                {/*            <Image src={'/assets/images/cross.svg'} alt={'icon-company'} width={33}*/}
                {/*                   height={33} style={{width: '2rem', height: '2rem'}}/>*/}
                {/*        </div>*/}
                {/*        <div*/}
                {/*            className={'rounded-full bg-[#F6F8FA] w-[3.25rem] h-[3.25rem] -ml-4 flex justify-center items-center'}>*/}
                {/*            <Image src={'/assets/images/icon-company-3.svg'} alt={'icon-company'} width={39}*/}
                {/*                   height={14} style={{width: '2.375rem', height: '0.875rem'}}/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <span className={'font-semibold text-base text-[#9F9F9F]'}>+20 компаний</span>*/}
                {/*</div>*/}
                <div className={'flex items-center flex-col justify-center mt-11'}>
                    <div className={'flex gap-1 items-center'}>
                <span className={'leading-[1.1875rem] font-medium text-base text-black text-center'}>Ваш бизнес на
                                                                                                     карте</span>
                        <Image alt={'icon'} src={'/assets/images/paperMap-emoji.png'} width={15}
                               height={15} style={{width: '0.9375rem', height: '0.9375rem'}}/>
                        <span className={'leading-[1.1875rem] font-medium text-base text-black text-center'}>привилегий для тысяч</span>
                    </div>
                    <div className={'flex gap-1 items-center'}>
                        <span className={'leading-[1.1875rem] font-medium text-base text-black text-center'}>членов профсоюзов.</span>
                        <Image alt={'icon'} src={'/assets/images/custom-arrow.svg'} width={28}
                               height={18} style={{width: '1.75rem', height: '1.125rem'}}/>
                        <span className={'leading-[1.1875rem] font-medium text-base text-black text-center'}>Бесплатное подключение.</span>
                    </div>
                    <div className={'flex items-center gap-0.5'}>
                        <span className={'leading-[1.1875rem] font-medium text-base text-black text-center'}>Увеличьте продажи — без затрат на рекламу</span>
                        <Image alt={'icon'} src={'/assets/images/hand-emoji.png'} width={15}
                               height={15} style={{width: '0.9375rem', height: '0.9375rem'}}/>
                    </div>
                </div>
                <h1 className={'font-semibold text-[3.125rem] text-center leading-[3.6875rem] mt-6 text-black'}>Привлекайте
                    новых <br/>клиентов через дисконтную <br/> систему профсоюзов
                </h1>
                <Link
    className={'bg-black font-medium text-base text-white px-5.5 py-2.5 rounded-xl mt-8 cursor-pointer'}
    href={'#start'}>Приступить</Link>
                <div
                    className={'mt-auto max-w-[19.75rem] w-full h-[19.25rem] bg-cover relative bg-white'}
                    style={{backgroundImage: `url('/assets/images/phone-border.png')`}}>
                    <Particle/>
                    <Profit/>
                    <Progress/>
                    <div className={'flex flex-col'}>
                        <span className={'font-semibold text-xl mt-[3.25rem] ml-[3.25rem] text-black'}>Ваши карты</span>
                        <div className={'w-full flex'}>
                            <div className={'color flex justify-center relative'}>
                                <div
                                    className={'w-[11.25rem] absolute h-[8.5rem] bg-[#f4c5bc] rounded-xl mt-[2.83rem]'}></div>
                                <div
                                    className={'w-[11.875rem] absolute h-[8.5rem] bg-[#e4735d] rounded-xl mt-[3.45rem]'}></div>
                                <div
                                    className={'w-[17.5rem] absolute h-[5rem] bg-white opacity-65 rounded-xl mt-[9.1rem] z-30'}
                                    ref={whiteLineRef}></div>
                                <div className="card mt-[4.10rem] z-20" ref={cardRef}>
                                    <div className="card__face card__face--front"></div>
                                    <div className="card__face card__face--back"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Advantages/>
        </div>
    );
}

export default HeroSection;