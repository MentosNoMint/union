"use client"

import Image from "next/image";

const Particle = () => {
    return (
        <>
            <div
                className={'w-[4.25rem] h-[4.25rem] rounded-full border border-[#DEDEDE] absolute z-30 bg-white flex justify-center items-center -ml-[26%] mt-11'}>
                <Image src={'/assets/images/shine-emoji.png'} alt={'emoji'} width={32} height={32} style={{width: '2rem', height: '2rem'}}></Image>
            </div>
            <div
                className={'w-[4.25rem] h-[4.25rem] rounded-full border border-[#DEDEDE] absolute z-30 bg-white flex justify-center items-center ml-[106%] mt-[14.125rem]'}>
                <Image src={'/assets/images/fire-emoji.png'} alt={'emoji'} width={32} height={32} style={{width: '2rem', height: '2rem'}}></Image>
            </div>
        </>
    );
}

export default Particle;