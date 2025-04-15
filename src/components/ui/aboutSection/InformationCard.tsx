import Image from "next/image";
import React from "react";

const InformationCard = ({props}: {
    props: { title: React.ReactNode, heading: string, desc: string, secondDesc: string, mark: string, image: string, position: number }
}) => {

    return (
        <div className={`flex max-w-[73.5rem] w-full justify-between absolute`}
             style={props.position ? {right: `${props.position}%`} : {}}>
            <div className={'flex flex-col items-start'}>
                <div
                    className={'bg-[#F6F6F6] rounded-full px-10 py-3.5 text-black text-base font-semibold'}>{props.heading}
                </div>
                <h1 className={'text-black font-semibold text-[2.5rem] leading-[2.875rem] mt-10'}>{props.title}</h1>
                <p className={'text-black font-medium text-xl leading-[1.4375rem] mt-8 max-w-[27rem]'}>{props.desc}</p>
            </div>
            <div className={'pointer-events-none -ml-8'}>
                <Image src={'/assets/images/phone.png'} alt={'phone'} width={300} height={600} style={{width: '18.75rem', height: '37.5rem'}}></Image>
            </div>
            <div
                className={'w-[12.5rem] h-[11.5rem] bg-[#F6F6F6] rounded-3xl flex flex-col'}>
                <div
                    className={'w-13 h-13 rounded-2xl bg-white ml-4 mt-4 flex justify-center items-center'}>
                    <Image src={`/assets/images/${props.image}-emoji.png`} alt={'emoji'} width={26}
                           height={26} style={{width: '1.625rem', height: '1.625rem'}}></Image>
                </div>
                <p className={'text-black font-semibold text-[0.9375rem] ml-4 leading-5 mt-12'}>{props.secondDesc}</p>
            </div>
        </div>
    )
}

export default InformationCard;