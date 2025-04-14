"use client"


import {useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

const CompanySlider = () => {
    const sliderRefs = useRef<HTMLDivElement[]>([]);
    const sliderRefs2 = useRef<HTMLDivElement[]>([]);

    useGSAP(() => {

        const tl = gsap.timeline({repeat: -1})

        sliderRefs.current.forEach((elRef) => {
            tl.to(elRef, {
                translateY: '-137.5%',
                duration: 15,
                ease: 'none',
                onComplete: () => {
                    elRef.insertBefore(elRef.children[0], elRef.children[1]);
                }
            }, "<")
        })

        sliderRefs2.current.forEach((elRef) => {
            tl.to(elRef, {
                translateY: '-37%',
                duration: 15,
                ease: 'none',
                onComplete: () => {
                    elRef.insertBefore(elRef.children[1], elRef.children[0]);
                }
            }, "<")
        })


    })
    return (
        <div className={'w-full bg-[#F2F2F2] rounded-[4rem] h-[47.25rem] mt-3 flex gap-3 justify-center overflow-hidden'}>
            <div className={'flex flex-col gap-3'} ref={(el) => {if(el) sliderRefs.current[0] = el}}>
                <div className={'flex flex-col gap-3'}>
                    <div className={'w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0'}></div>
                    <div className={'w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0'}></div>
                    <div className={'w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0'}></div>
                </div>
                <div className={'flex flex-col gap-3'}>
                    <div className={'w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0'}></div>
                    <div className={'w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0'}></div>
                    <div className={'w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0'}></div>
                </div>
            </div>
            <div className={'flex flex-col gap-3 first:-translate-y-[74.5%] -translate-y-[174.5%]'} ref={(el) => {if(el) sliderRefs2.current[0] = el}}>
                <div className={'flex flex-col gap-3'}>
                    <div className={'w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0'}></div>
                    <div className={'w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0'}></div>
                    <div className={'w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0'}></div>
                </div>
                <div className={'flex flex-col gap-3'}>
                    <div className={'w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0'}></div>
                    <div className={'w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0'}></div>
                    <div className={'w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0'}></div>
                </div>
            </div>
            <div className={'flex flex-col gap-3'} ref={(el) => {if(el) sliderRefs.current[1] = el}}>
                <div className={'flex flex-col gap-3'}>
                    <div className={'w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0'}></div>
                    <div className={'w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0'}></div>
                    <div className={'w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0'}></div>
                </div>
                <div className={'flex flex-col gap-3'}>
                    <div className={'w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0'}></div>
                    <div className={'w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0'}></div>
                    <div className={'w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0'}></div>
                </div>
            </div>
            <div className={'flex flex-col gap-3 first:-translate-y-[74.5%] -translate-y-[174.5%]'} ref={(el) => {if(el) sliderRefs2.current[1] = el}}>
                <div className={'flex flex-col gap-3'}>
                    <div className={'w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0'}></div>
                    <div className={'w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0'}></div>
                    <div className={'w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0'}></div>
                </div>
                <div className={'flex flex-col gap-3'}>
                    <div className={'w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0'}></div>
                    <div className={'w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0'}></div>
                    <div className={'w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0'}></div>
                </div>
            </div>
        </div>
    )
}

export default CompanySlider;