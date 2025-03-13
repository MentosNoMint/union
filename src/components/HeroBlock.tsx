import Image from "next/image";

const HeroBlock = () => {
    return (
        <div className={'w-full bg-white h-[47.25rem] rounded-[2.75rem] max-w-[88.75rem] mt-7 flex flex-col items-center'}>
            <div className={'flex items-center gap-6 mt-[3.25rem]'}>
                <div className={'flex'}>
                    <div
                        className={'rounded-full bg-[#F6F8FA] w-[3.25rem] h-[3.25rem] flex justify-center items-center'}>
                        <Image src={'/assets/images/icon-company-1.svg'} alt={'icon-company'} width={56} height={48}/>
                    </div>
                    <div className={'rounded-full bg-[#F6F8FA] w-[3.25rem] h-[3.25rem] -ml-4 flex justify-center items-center'}>
                        <Image src={'/assets/images/icon-company-2.svg'} alt={'icon-company'} width={33} height={33}/>
                    </div>
                    <div className={'rounded-full bg-[#F6F8FA] w-[3.25rem] h-[3.25rem] -ml-4 flex justify-center items-center'}>
                        <Image src={'/assets/images/icon-company-3.svg'} alt={'icon-company'} width={39} height={14}/>
                    </div>
                </div>
                <span className={'font-semibold text-base text-[#9F9F9F]'}>+20 компаний</span>
            </div>
        </div>
    );
}

export default HeroBlock;