"use client"

import {useState} from "react";
import Link from 'next/link';
import Image from "next/image";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={'flex w-full justify-between items-center max-w-[86.25rem] max-lg:px-5.5 mt-7'}>
            <header className={'w-full flex justify-between items-center'}>
                <Image src={'/assets/images/full-logo-orange.png'} alt={'logo'} width={138} height={38}
                       style={{width: '8.625rem', height: '2.375rem'}}/>
                <div className={'flex gap-1 items-center max-lg:hidden'}>
                    <Link className={'font-semibold text-base text-black bg-white rounded-lg py-3 px-4 cursor-pointer'}
                          href={'#about'}>О нас</Link>
                    <div
                        className={'py-3 px-1.5 bg-white text-black rounded-full font-semibold text-base cursor-pointer'}>/
                    </div>
                    <Link className={'font-medium text-base text-white bg-black rounded-full py-3 px-4 cursor-pointer'}
                          href={'#start'}>Вступить</Link>
                </div>
            </header>

            <button className='lg:hidden cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                <Image src={'/assets/images/burger-icon.svg'} alt={'burger-menu'} width={25} height={25}/>
            </button>
            {
                isOpen && (
                    <div className='fixed top-0 left-0 w-full h-[290px] bg-white z-50 px-5 py-5 rounded-b-xl'>
                        <div className='fixed top-[290px] left-0 w-full h-screen bg-black opacity-50 z-10'></div>
                        <div className='w-full flex justify-between'>
                            <Image src={'/assets/images/full-logo-orange.png'} alt={'logo'} width={138} height={38}
                                   style={{width: '8.625rem', height: '2.375rem'}}/>
                            <button onClick={() => setIsOpen(!isOpen)} className={'cursor-pointer'}>
                                <Image src={'/assets/images/close-icon.svg'} alt={'close'} width={25} height={25}/>
                            </button>
                        </div>
                        <nav className='flex flex-col gap-2 mt-5 items-center'>
                            <Link className={'font-semibold text-base text-black bg-[#f2f2f2] rounded-lg py-3 w-full cursor-pointer text-center mt-2'}
                                  href={'#about'} onClick={() => setIsOpen(false)}>О нас</Link>
                            <div
                                className={'px-1.5 bg-white text-black rounded-full font-semibold text-lg cursor-pointer'}>/
                            </div>
                            <Link className={'font-medium text-base text-white bg-black rounded-full py-3 w-full cursor-pointer text-center'}
                                  href={'#start'} onClick={() => setIsOpen(false)}>Вступить</Link>
                        </nav>
                    </div>
                )
            }
        </div>
    )
};

export default Header;