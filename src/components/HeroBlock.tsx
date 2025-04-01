"use client"

import Image from "next/image";
import React, {useRef} from "react";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from "gsap";


const HeroBlock = () => {

    interface ExtendedDivElement extends HTMLDivElement {
        _isRotating?: boolean;
    }

    const cardRef = useRef<ExtendedDivElement>(null);
    const triggerBlockRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.to(triggerBlockRef.current, {
            backgroundColor: 'white',
            duration: 2,
            scrollTrigger: {
                trigger: triggerBlockRef.current,
                start: '20% center',
                end: '25% center',
                scrub: true,
            }
        })
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: cardRef.current as gsap.DOMTarget,
                start: '100% center',
                end: '+=3000',
                pin: true,
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
                                overwrite: "auto"
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
                                overwrite: true
                            });
                        }
                    }
                }
            }
        });
        return () => {
            tl.kill();
        };
    })


    return (
        <div className={'bg-[#f2f2f2] w-full flex flex-col items-center'} ref={triggerBlockRef}>
            <div
                className={'w-full bg-white h-[47.25rem] rounded-[2.75rem] max-w-[88.75rem] mt-7 flex flex-col items-center'}>
                <div className={'flex items-center gap-6 mt-[3.25rem]'}>
                    <div className={'flex'}>
                        <div
                            className={'rounded-full bg-[#F6F8FA] w-[3.25rem] h-[3.25rem] flex justify-center items-center'}>
                            <Image src={'/assets/images/icon-company-1.svg'} alt={'icon-company'} width={56}
                                   height={48}/>
                        </div>
                        <div
                            className={'rounded-full bg-[#F6F8FA] w-[3.25rem] h-[3.25rem] -ml-4 flex justify-center items-center'}>
                            <Image src={'/assets/images/icon-company-2.svg'} alt={'icon-company'} width={33}
                                   height={33}/>
                        </div>
                        <div
                            className={'rounded-full bg-[#F6F8FA] w-[3.25rem] h-[3.25rem] -ml-4 flex justify-center items-center'}>
                            <Image src={'/assets/images/icon-company-3.svg'} alt={'icon-company'} width={39}
                                   height={14}/>
                        </div>
                    </div>
                    <span className={'font-semibold text-base text-[#9F9F9F]'}>+20 компаний</span>
                </div>
                <h1 className={'font-semibold text-[3.5rem] text-center leading-[4.125rem] mt-8'}>Усильте
                    вашу <br/> компанию с
                    нашей <br/> поддержкой</h1>
                <div
                    className={'mt-auto max-w-[19.75rem] w-full h-[19.25rem] bg-cover select-none pointer-events-none overflow-hidden'}
                    style={{backgroundImage: `url('/assets/images/phone-border.png')`}}>
                    <div className={'flex flex-col'}>
                        <span className={'font-semibold text-xl mt-[3.25rem] ml-[3.25rem]'}>Ваши карты</span>
                        <div className={'w-full flex'}>
                            <div className={'color flex justify-center'}>
                                <div className="card mt-[4.10rem] z-20" ref={cardRef}>
                                    <div className="card__face card__face--front"></div>
                                    <div className="card__face card__face--back"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'h-[4000px]'}></div>
        </div>
    );
}

export default HeroBlock;