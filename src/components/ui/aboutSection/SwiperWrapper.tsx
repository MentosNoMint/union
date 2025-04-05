"use client"

const swiperWrapper = () => {
    return (
            <div
                className={'w-[18.5rem] h-[3.25rem] rounded-full bg-[#EBEBEB] flex items-center gap-2.5 justify-between'}>
                <div className={'absolute w-[4.8rem] h-11 bg-white z-10 rounded-full l-0 mx-1'}></div>
                <button className={'rounded-full text-base font-semibold text-black cursor-pointer z-20 ml-5'}>О нас
                </button>
                <button className={'rounded-full text-base font-semibold text-black cursor-pointer z-20'}>Геокарта
                </button>
                <button
                    className={'rounded-full text-base font-semibold text-black cursor-pointer z-20 mr-5'}>Партнеры
                </button>
            </div>);
}

export default swiperWrapper;