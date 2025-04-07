"use client"

import { forwardRef, Ref } from "react";

interface SwiperWrapperProps {
    onButtonClick: (slideName: string) => void;
}

const SwiperWrapper = forwardRef<HTMLDivElement, SwiperWrapperProps>(
    ({ onButtonClick }: SwiperWrapperProps, ref: Ref<HTMLDivElement>) => {
        return (
            <div
                className="w-[18.5rem] h-[3.25rem] rounded-full bg-[#EBEBEB] flex items-center gap-2.5 justify-between relative"
            >
                <div
                    className="absolute w-[4.8rem] h-11 bg-white z-10 rounded-full left-0 mx-1"
                    ref={ref}
                ></div>
                <button
                    className="rounded-full text-base font-semibold text-black cursor-pointer z-20 ml-5"
                    onClick={() => onButtonClick('about')}
                >
                    О нас
                </button>
                <button
                    className="rounded-full text-base font-semibold text-black cursor-pointer z-20"
                    onClick={() => onButtonClick('map')}
                >
                    Геокарта
                </button>
                <button
                    className="rounded-full text-base font-semibold text-black cursor-pointer z-20 mr-5"
                    onClick={() => onButtonClick('partner')}
                >
                    Партнеры
                </button>
            </div>
        );
    }
);

SwiperWrapper.displayName = "SwiperWrapper";

export default SwiperWrapper;