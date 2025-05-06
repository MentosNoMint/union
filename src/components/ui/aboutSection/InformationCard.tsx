import Image from "next/image";
import React from "react";

const InformationCard = ({props}: {
    props: {
        title: React.ReactNode,
        heading: string,
        desc: string,
        secondDesc: string,
        mark: string,
        image: string,
        position: number,
        src: string,
    }
}) => {

    return (
        <div
            className={`flex max-w-[73.5rem] w-full justify-between absolute max-md:flex-col max-md:items-center max-md:px-5.5 max-lg:px-5.5 max-lg:justify-around`}
            style={props.position ? {right: `${props.position}%`} : {}}>
            <div className={'flex flex-col items-start'}>
                <div
                    className={'bg-[#F6F6F6] rounded-full px-10 py-3.5 text-black text-base font-semibold'}>{props.heading}
                </div>
                <h1 className={'text-black font-semibold text-[2.5rem] leading-[2.875rem] mt-10'}>{props.title}</h1>
                <p className={'text-black font-medium text-xl leading-[1.4375rem] mt-8 max-w-[27rem]'}>{props.desc}</p>
            </div>

            <div className="max-w-[19.75rem] w-full h-[53.625rem] relative -ml-8 max-md:-ml-0 max-md:mt-10">
                <div className="absolute inset-0 z-20">
                    <img
                        src="/assets/images/phone.png"
                        alt="Phone Frame"
                        className="w-full object-contain"
                    />
                </div>
                <div className="absolute top-[1.7%] left-[5.5%] right-[5.5%] bottom-[5%] z-10">
                    <img
                        src={props.src}
                        alt="Screen"
                        className="w-full object-cover rounded-[10px] rounded-3xl"
                    />
                </div>
            </div>
            {/*<div*/}
            {/*    className={'max-w-[19.75rem] w-full h-[53.625rem] relative bg-white -ml-8 max-md:-ml-0 max-md:mt-10 flex justify-center'}>*/}
            {/*    <div className={'flex justify-center w-full max-h-[640px] bg-black'}>*/}
            {/*        <Image src={'/assets/images/prof-landing.png'} alt={'photo'} width={315} height={638}*/}
            {/*               className={'absolute z-10 object-cover'}></Image>*/}
            {/*        <Image src={'/assets/images/phone.png'} alt={'phone'} width={354} height={718}*/}
            {/*               className={'z-20 absolute'}/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div*/}
            {/*    className={'max-w-[19.75rem] w-full bg-contain relative bg-white -ml-8 max-md:-ml-0 max-md:mt-10 z-50 h-[53.625rem] flex items-start bg-no-repeat'}*/}
            {/*    style={{backgroundImage: `url('/assets/images/prof-landing.png')`}}>*/}
            {/*    <Image src={'/assets/images/phone.png'} alt={'phone'} width={395} height={857} className={'w-full object-fill'}/>*/}
            {/*</div>*/}
            <div
                className={'w-[12.5rem] h-[11.5rem] bg-[#F6F6F6] rounded-3xl flex flex-col max-lg:hidden'}>
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