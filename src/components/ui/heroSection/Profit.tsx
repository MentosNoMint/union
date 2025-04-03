'use client'

import Image from "next/image";

const Profit = () => {
    return (
        <div className={'w-[12rem] h-[8.625rem] rounded-[1.25rem] border border-[#DEDEDE] absolute bg-white -ml-[48%] -z-10 mt-[9.3rem]'}>
            <div className={'px-3.5 flex flex-col'}>
                <div
                    className={'mt-3.5 rounded-2xl bg-[#F6F8FA] w-[3.25rem] h-[3.25rem] flex justify-center items-center'}>
                    <Image src={'/assets/images/logo.svg'} alt={'icon'} width={27.8} height={33}></Image>
                </div>
                <div className={'flex flex-col mt-6'}>
                    <p className={'font-semibold text-base text-black leading-[0.8rem]'}>Прибыль <br/> <span
                        className={'text-[#9F9F9F] text-base font-semibold'}>20%</span></p>
                </div>
            </div>
        </div>
    );
}

export default Profit;