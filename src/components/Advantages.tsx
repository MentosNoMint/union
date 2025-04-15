"use client"

import React, {useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import Image from "next/image";

const Advantages = () => {

    const wrapperRef = useRef(null);
    const lightRef = useRef(null);
    const answersRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if(!answersRef.current) return;

        const tlAnswers = gsap.timeline({
            scrollTrigger: {
                trigger: wrapperRef.current,
                start: '35% center',
                end: '+=2000',
                scrub: true,
            }
        })

        const tlLight = gsap.timeline({
            scrollTrigger: {
                trigger: wrapperRef.current,
                start: '35% center',
                end: '+=500',
                scrub: true,
            }
        })

        tlLight.to(lightRef.current, {
            opacity: 1,
            duration: 1,
        })

        tlAnswers.to(answersRef.current.children[0], {
            transformOrigin: "bottom bottom",
            scale: 1,
            duration: 1,
        })
        tlAnswers.to(answersRef.current.children[1], {
            transformOrigin: "bottom left",
            scale: 1,
            duration: 1,
        })
        tlAnswers.to(answersRef.current.children[2], {
            transformOrigin: "bottom bottom",
            scale: 1,
            duration: 1,
        })
        tlAnswers.to(answersRef.current.children[3], {
            transformOrigin: "bottom left",
            scale: 1,
            duration: 1,
        })
    })

    return (
        <div className={'h-[243.75rem] w-full'} ref={wrapperRef}>
            <div className={'w-full mt-[37.5rem] sticky top-0 max-w-full overflow-x-hidden h-[62.5rem]'}>
                <div className={'opacity-0 w-full'} ref={lightRef}>
                    <div className={'color-2'}></div>
                    <div className={'color-3'}></div>
                </div>
                <div ref={answersRef}>
                    <div
                        className={'w-[18.625rem] h-[5.25rem] border border-[#DEDEDE] bg-white rounded-3xl absolute flex items-center mt-20 ml-[15%] scale-0'}>
                        <div className={'w-13 h-13 rounded-2xl bg-[#F6F6F6] ml-4 flex justify-center items-center'}>
                            <Image src={'/assets/images/people-emoji.png'} alt={'emoji'} width={28} height={28} style={{width: '1.75rem', height: '1.75rem'}}></Image>
                        </div>
                        <div className={'flex flex-col ml-3.5'}>
                            <span className={'text-black font-semibold text-base leading-5'}>Больше клиентов</span>
                            <span className={'font-medium text-base text-[#9F9F9F]'}>Сервис для привлечения</span>
                        </div>
                    </div>
                    <div
                        className={'w-[18.625rem] h-[5.25rem] border border-[#DEDEDE] bg-white rounded-3xl absolute flex items-center mt-[30rem] right-0 mr-[18%] scale-0'}>
                        <div className={'w-13 h-13 rounded-2xl bg-[#F6F6F6] ml-4 flex justify-center items-center'}>
                            <Image src={'/assets/images/height-emoji.png'} alt={'emoji'} width={26} height={26} style={{width: '1.625rem', height: '1.625rem'}}></Image>
                        </div>
                        <div className={'flex flex-col ml-3.5'}>
                            <span className={'text-black font-semibold text-base leading-5'}>Рост прибыли</span>
                            <span className={'font-medium text-base text-[#9F9F9F]'}>Увеличьте свой рост</span>
                        </div>
                    </div>
                    <div
                        className={'w-[12.5rem] h-[11.5rem] border border-[#DEDEDE] bg-white rounded-3xl absolute flex mt-[30rem] left-0 ml-[18%] flex-col scale-0'}>
                        <div className={'w-13 h-13 rounded-2xl bg-[#F6F6F6] ml-4 mt-4 flex justify-center items-center'}>
                            <Image src={'/assets/images/map-emoji.png'} alt={'emoji'} width={26} height={26} style={{width: '1.625rem', height: '1.625rem'}}></Image>
                        </div>
                        <p className={'text-black font-semibold text-[0.9375rem] ml-4 leading-5 mt-12'}>Ваша точка на карте профсоюза</p>
                    </div>
                    <div
                        className={'w-[12.5rem] h-[11.5rem] border border-[#DEDEDE] bg-white rounded-3xl absolute flex mt-20 right-0 mr-[18%] flex-col scale-0'}>
                        <div className={'w-13 h-13 rounded-2xl bg-[#F6F6F6] ml-4 mt-4 flex justify-center items-center'}>
                            <Image src={'/assets/images/hand-emoji.png'} alt={'emoji'} width={26} height={26} style={{width: '1.625rem', height: '1.625rem'}}></Image>
                        </div>
                        <p className={'text-black font-semibold text-[0.9375rem] ml-4 leading-5 mt-12'}>Простое вступление в наш профсоюз</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Advantages;