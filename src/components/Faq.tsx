import Image from "next/image";

const Faq = () => {
    return (
        <div className={'max-w-[86.25rem] w-full'}>
            <h1 className={'font-semibold text-5xl text-black mb-16'}>Часто задаваемые вопросы</h1>
            <div className={'flex flex-col gap-10'}>
                <div className={'flex flex-col'}>
                    <div className={'w-full h-px bg-[#D1D1D1]'}/>
                    <div className={'mt-4 flex justify-between'}>
                        <p className={'font-semibold text-black text-2xl'}>Какие преимущества получит моя компания после
                            вступления?</p>
                        <Image src={'/assets/images/plus.svg'} alt={'icon'} width={20} height={20}
                               className={'cursor-pointer'}></Image>
                    </div>
                </div>
                <div className={'flex flex-col'}>
                    <div className={'w-full h-px bg-[#D1D1D1]'}/>
                    <div className={'mt-4 flex justify-between'}>
                        <p className={'font-semibold text-black text-2xl'}>Сколько стоит вступление?</p>
                        <Image src={'/assets/images/plus.svg'} alt={'icon'} width={20} height={20}
                               className={'cursor-pointer'}></Image>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;