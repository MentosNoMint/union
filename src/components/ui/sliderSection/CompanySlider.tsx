"use client"

import {useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import useMediaQuery from "@/utils/CheckMobile";

const CompanySlider = () => {
    const sliderRefs = useRef<HTMLDivElement[]>([]);
    const sliderRefs2 = useRef<HTMLDivElement[]>([]);
    const isMobile = useMediaQuery(1024)

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
        <div
            className={'w-full bg-[#F2F2F2] rounded-[4rem] h-[47.25rem] mt-3 flex gap-3 justify-center overflow-hidden'}>
            <div className={'flex flex-col gap-3'} ref={(el) => {
                if (el) sliderRefs.current[0] = el
            }}>
                <div className={'flex flex-col gap-3'}>
                    <div
                        className={'w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0 flex items-center justify-center'}>
                        <div
                            className="w-[4.25rem] h-[4.5rem] bg-[#C1C1C1] object-fill"
                            style={{
                                WebkitMask: "url('/assets/gray-images/burgerKing.svg') no-repeat center",
                                mask: "url('/assets/gray-images/burgerKing.svg') no-repeat center",
                                maskSize: 'contain',
                            }}
                        />
                    </div>
                    <div
                        className="w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0 flex items-center justify-center">
                        <div
                            className="w-[2.5rem] h-[3rem] bg-[#C1C1C1] object-fill"
                            style={{
                                WebkitMask: "url('/assets/gray-images/logo.png') no-repeat center",
                                mask: "url('/assets/gray-images/logo.png') no-repeat center",
                                maskSize: 'contain',
                            }}
                        />
                    </div>
                    <div
                        className="w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0 flex items-center justify-center">
                        <div
                            className="w-[3rem] h-[3rem] bg-[#C1C1C1] object-fill"
                            style={{
                                WebkitMask: "url('/assets/gray-images/cross.svg') no-repeat center",
                                mask: "url('/assets/gray-images/cross.svg') no-repeat center",
                                maskSize: 'contain',
                            }}
                        />
                    </div>
                </div>
                <div className={'flex flex-col gap-3'}>
                    <div
                        className={'w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0 flex items-center justify-center'}>
                        <div
                            className="w-[4.25rem] h-[4.5rem] bg-[#C1C1C1] object-fill"
                            style={{
                                WebkitMask: "url('/assets/gray-images/burgerKing.svg') no-repeat center",
                                mask: "url('/assets/gray-images/burgerKing.svg') no-repeat center",
                                maskSize: 'contain',
                            }}
                        />
                    </div>
                    <div
                        className="w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0 flex items-center justify-center">
                        <div
                            className="w-[2.5rem] h-[3rem] bg-[#C1C1C1] object-fill"
                            style={{
                                WebkitMask: "url('/assets/gray-images/logo.png') no-repeat center",
                                mask: "url('/assets/gray-images/logo.png') no-repeat center",
                                maskSize: 'contain',
                            }}
                        />
                    </div>
                    <div
                        className="w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0 flex items-center justify-center">
                        <div
                            className="w-[2.5rem] h-[3rem] bg-[#C1C1C1] object-fill"
                            style={{
                                WebkitMask: "url('/assets/gray-images/cross.svg') no-repeat center",
                                mask: "url('/assets/gray-images/cross.svg') no-repeat center",
                                maskSize: 'contain',
                            }}
                        />
                    </div>
                </div>
            </div>
            {!isMobile && (
                <>
                    <div className={'flex flex-col gap-3 first:-translate-y-[74.5%] -translate-y-[174.5%]'}
                         ref={(el) => {
                             if (el) sliderRefs2.current[0] = el
                         }}>
                        <div className={'flex flex-col gap-3'}>
                            <div
                                className="w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0 flex items-center justify-center">
                                <div
                                    className="w-[6.25rem] h-[4.25rem] bg-[#C1C1C1] object-fill"
                                    style={{
                                        WebkitMask: "url('/assets/gray-images/Gazprom-Logo.png') no-repeat center",
                                        mask: "url('/assets/gray-images/Gazprom-Logo.png') no-repeat center",
                                        maskSize: 'contain',
                                    }}
                                />
                            </div>
                            <div
                                className="w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0 flex items-center justify-center">
                                <div
                                    className="w-[8.25rem] h-[6.25rem] bg-[#C1C1C1] object-fill"
                                    style={{
                                        WebkitMask: "url('/assets/gray-images/sokolov.png') no-repeat center",
                                        mask: "url('/assets/gray-images/sokolov.png') no-repeat center",
                                        maskSize: 'contain',
                                    }}
                                />
                            </div>
                            <div
                                className="w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0 flex items-center justify-center">
                                <div
                                    className="w-[7rem] h-[5rem] bg-[#C1C1C1] object-fill"
                                    style={{
                                        WebkitMask: "url('/assets/gray-images/dodo-logo.png') no-repeat center",
                                        mask: "url('/assets/gray-images/dodo-logo.png') no-repeat center",
                                        maskSize: 'contain',
                                    }}
                                />
                            </div>
                        </div>
                        <div className={'flex flex-col gap-3'}>
                            <div
                                className="w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0 flex items-center justify-center">
                                <div
                                    className="w-[6.25rem] h-[4.25rem] bg-[#C1C1C1] object-fill"
                                    style={{
                                        WebkitMask: "url('/assets/gray-images/Gazprom-Logo.png') no-repeat center",
                                        mask: "url('/assets/gray-images/Gazprom-Logo.png') no-repeat center",
                                        maskSize: 'contain',
                                    }}
                                />
                            </div>
                            <div
                                className="w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0 flex items-center justify-center">
                                <div
                                    className="w-[8.25rem] h-[6.25rem] bg-[#C1C1C1] object-fill"
                                    style={{
                                        WebkitMask: "url('/assets/gray-images/sokolov.png') no-repeat center",
                                        mask: "url('/assets/gray-images/sokolov.png') no-repeat center",
                                        maskSize: 'contain',
                                    }}
                                />
                            </div>
                            <div
                                className="w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0 flex items-center justify-center">
                                <div
                                    className="w-[7rem] h-[5rem] bg-[#C1C1C1] object-fill"
                                    style={{
                                        WebkitMask: "url('/assets/gray-images/dodo-logo.png') no-repeat center",
                                        mask: "url('/assets/gray-images/dodo-logo.png') no-repeat center",
                                        maskSize: 'contain',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-3'} ref={(el) => {
                        if (el) sliderRefs.current[1] = el
                    }}>
                        <div className={'flex flex-col gap-3'}>
                            <div
                                className={'w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0 flex items-center justify-center'}>
                                <div
                                    className="w-[4.25rem] h-[4.5rem] bg-[#C1C1C1] object-fill"
                                    style={{
                                        WebkitMask: "url('/assets/gray-images/burgerKing.svg') no-repeat center",
                                        mask: "url('/assets/gray-images/burgerKing.svg') no-repeat center",
                                        maskSize: 'contain',
                                    }}
                                />
                            </div>
                            <div
                                className="w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0 flex items-center justify-center">
                                <div
                                    className="w-[2.5rem] h-[3rem] bg-[#C1C1C1] object-fill"
                                    style={{
                                        WebkitMask: "url('/assets/gray-images/logo.png') no-repeat center",
                                        mask: "url('/assets/gray-images/logo.png') no-repeat center",
                                        maskSize: 'contain',
                                    }}
                                />
                            </div>
                            <div
                                className="w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0 flex items-center justify-center">
                                <div
                                    className="w-[2.5rem] h-[3rem] bg-[#C1C1C1] object-fill"
                                    style={{
                                        WebkitMask: "url('/assets/gray-images/cross.svg') no-repeat center",
                                        mask: "url('/assets/gray-images/cross.svg') no-repeat center",
                                        maskSize: 'contain',
                                    }}
                                />
                            </div>
                        </div>
                        <div className={'flex flex-col gap-3'}>
                            <div
                                className={'w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0 flex items-center justify-center'}>
                                <div
                                    className="w-[4.25rem] h-[4.5rem] bg-[#C1C1C1] object-fill"
                                    style={{
                                        WebkitMask: "url('/assets/gray-images/burgerKing.svg') no-repeat center",
                                        mask: "url('/assets/gray-images/burgerKing.svg') no-repeat center",
                                        maskSize: 'contain',
                                    }}
                                />
                            </div>
                            <div
                                className="w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0 flex items-center justify-center">
                                <div
                                    className="w-[2.5rem] h-[3rem] bg-[#C1C1C1] object-fill"
                                    style={{
                                        WebkitMask: "url('/assets/gray-images/logo.png') no-repeat center",
                                        mask: "url('/assets/gray-images/logo.png') no-repeat center",
                                        maskSize: 'contain',
                                    }}
                                />
                            </div>
                            <div
                                className="w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0 flex items-center justify-center">
                                <div
                                    className="w-[2.5rem] h-[3rem] bg-[#C1C1C1] object-fill"
                                    style={{
                                        WebkitMask: "url('/assets/gray-images/cross.svg') no-repeat center",
                                        mask: "url('/assets/gray-images/cross.svg') no-repeat center",
                                        maskSize: 'contain',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-3 first:-translate-y-[74.5%] -translate-y-[174.5%]'}
                         ref={(el) => {
                             if (el) sliderRefs2.current[1] = el
                         }}>
                        <div className={'flex flex-col gap-3'}>
                            <div
                                className="w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0 flex items-center justify-center">
                                <div
                                    className="w-[6.25rem] h-[4.25rem] bg-[#C1C1C1] object-fill"
                                    style={{
                                        WebkitMask: "url('/assets/gray-images/Gazprom-Logo.png') no-repeat center",
                                        mask: "url('/assets/gray-images/Gazprom-Logo.png') no-repeat center",
                                        maskSize: 'contain',
                                    }}
                                />
                            </div>
                            <div
                                className="w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0 flex items-center justify-center">
                                <div
                                    className="w-[8.25rem] h-[6.25rem] bg-[#C1C1C1] object-fill"
                                    style={{
                                        WebkitMask: "url('/assets/gray-images/sokolov.png') no-repeat center",
                                        mask: "url('/assets/gray-images/sokolov.png') no-repeat center",
                                        maskSize: 'contain',
                                    }}
                                />
                            </div>
                            <div
                                className="w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0 flex items-center justify-center">
                                <div
                                    className="w-[7rem] h-[5rem] bg-[#C1C1C1] object-fill"
                                    style={{
                                        WebkitMask: "url('/assets/gray-images/dodo-logo.png') no-repeat center",
                                        mask: "url('/assets/gray-images/dodo-logo.png') no-repeat center",
                                        maskSize: 'contain',
                                    }}
                                />
                            </div>
                        </div>
                        <div className={'flex flex-col gap-3'}>
                            <div
                                className="w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0 flex items-center justify-center">
                                <div
                                    className="w-[6.25rem] h-[4.25rem] bg-[#C1C1C1] object-fill"
                                    style={{
                                        WebkitMask: "url('/assets/gray-images/Gazprom-Logo.png') no-repeat center",
                                        mask: "url('/assets/gray-images/Gazprom-Logo.png') no-repeat center",
                                        maskSize: 'contain',
                                    }}
                                />
                            </div>
                            <div
                                className="w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0 flex items-center justify-center">
                                <div
                                    className="w-[8.25rem] h-[6.25rem] bg-[#C1C1C1] object-fill"
                                    style={{
                                        WebkitMask: "url('/assets/gray-images/sokolov.png') no-repeat center",
                                        mask: "url('/assets/gray-images/sokolov.png') no-repeat center",
                                        maskSize: 'contain',
                                    }}
                                />
                            </div>
                            <div
                                className="w-[21.5rem] h-[21rem] bg-[#E7E7E7] rounded-[3.25rem] shrink-0 flex items-center justify-center">
                                <div
                                    className="w-[7rem] h-[5rem] bg-[#C1C1C1] object-fill"
                                    style={{
                                        WebkitMask: "url('/assets/gray-images/dodo-logo.png') no-repeat center",
                                        mask: "url('/assets/gray-images/dodo-logo.png') no-repeat center",
                                        maskSize: 'contain',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default CompanySlider;