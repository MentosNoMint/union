import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={'w-full flex max-w-[86.25rem] flex-col mt-[14.3rem]'}>
            <div className={'w-full flex justify-between items-end'}>
                <div className={'flex flex-col gap-4'}>
                    <Image src={'/assets/images/logo.svg'} alt={'logo'} width={'36'} height={'43'}/>
                    <h1 className={'text-2xl font-semibold text-black'}>Лига преимуществ</h1>
                    <p className={'text-lg font-medium text-[#434343] leading-[1.3rem]'}>Хотите, чтобы ваш бизнес рос
                        быстрее? <br/> Присоединяйтесь!</p>
                </div>
                <div className={'flex max-w-[26.5rem] w-full justify-between'}>
                    <div className={'flex flex-col'}>
                        <span className={'text-lg font-semibold text-black mb-1.5'}>Навигация</span>
                        <nav className={'gap-1 flex flex-col'}>
                            <Link href={'#'} className={'text-[#747474] text-base'}>О нас</Link>
                            <Link href={'#'} className={'text-[#747474] text-base'}>Задаваемые вопросы</Link>
                            <Link href={'#'} className={'text-[#747474] text-base'}>Наша статистика</Link>
                        </nav>
                    </div>
                    <div className={'flex flex-col'}>
                        <span className={'text-lg font-semibold text-black mb-1.5'}>Связь с нами</span>
                        <nav className={'gap-1 flex flex-col'}>
                            <Link href={'https://profprivelegies.ru/'} className={'text-[#747474] text-base underline'}
                                  target={"_blank"}>Союз преимуществ</Link>
                            <Link href={'#'} className={'text-[#747474] text-base underline'}>+7 901 457-31-86</Link>
                            <Link href={'#'}
                                  className={'text-[#747474] text-base underline'}>help@profprivelegies.ru</Link>
                        </nav>
                    </div>
                </div>
            </div>
            <div className={'w-full h-px bg-[#CFCFCF] mt-[7.5rem]'}></div>
            <span className={'font-medium text-black text-base mt-8 mb-8'}>© Лига преимуществ, 2025.</span>
        </div>
    )
}

export default Footer;