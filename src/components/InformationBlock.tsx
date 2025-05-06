const informationBlock = () => {
    return (
        <div className={'w-full flex gap-3 justify-center flex-wrap'}>
            <div className={'max-w-[21.5rem] w-full h-[21rem] bg-[#F2F2F2] rounded-[4rem] px-8'}>
                <div className={'flex flex-col gap-1 mt-10'}>
                    <div className={'flex gap-1'}>
                        <div className={'w-6 h-6 rounded-md bg-[#D9D9D9]'}></div>
                        <div className={'w-6 h-6 bg-[#D9D9D9]'}></div>
                    </div>
                    <div className={'flex gap-1'}>
                        <div className={'w-6 h-6 bg-[#D9D9D9]'}></div>
                        <div className={'w-6 h-6 rounded-md rounded-tl-2xl bg-[#D9D9D9]'}></div>
                    </div>
                </div>
                <h1 className={'text-black font-semibold text-lg mt-20'}>Количество партнеров</h1>
                <p className={'text-base font-medium text-[#8A8A8A] leading-[1.2rem] mt-9 ml-7'}>Наш профсоюз
                    объединяет <br/> уже более 2000 компаний из самых разных отраслей!</p>
            </div>
            <div className={'max-w-[21.5rem] w-full h-[21rem] bg-[#F2F2F2] rounded-[4rem] px-8'}>
                <div className={'flex gap-1 mt-10'}>
                    <div className={'flex gap-1 flex-col'}>
                        <div className={'w-[1.75rem] h-6 rounded-md bg-[#D9D9D9]'}></div>
                        <div className={'w-[1.75rem] h-6 rounded-xl bg-[#D9D9D9]'}></div>
                    </div>
                    <div className={'w-6 h-13 rounded-full bg-[#D9D9D9]'}></div>
                </div>
                <h1 className={'text-black font-semibold text-lg mt-20'}>Охват регионов РФ</h1>
                <p className={'text-base font-medium text-[#8A8A8A] leading-[1.2rem] mt-9 ml-7'}>Мы охватываем более 20+
                    регионов в Российской федерации</p>
            </div>
            <div className={'max-w-[21.5rem] w-full h-[21rem] bg-[#F2F2F2] rounded-[4rem] px-8'}>
                <div className={'flex flex-col gap-1 mt-10'}>
                    <div className={'w-13 h-6 rounded-full bg-[#D9D9D9]'}></div>
                    <div className={'w-13 h-6 rounded-full bg-[#D9D9D9]'}></div>
                </div>
                <h1 className={'text-black font-semibold text-lg mt-20'}>Рост дохода</h1>
                <p className={'text-base font-medium text-[#8A8A8A] leading-[1.2rem] mt-9 ml-7'}>Средний доход компаний
                    в нашем профсоюзе получает рост около 20%</p>
            </div>
            <div className={'max-w-[21.5rem] w-full h-[21rem] bg-[#F2F2F2] rounded-[4rem] px-8'}>
                <div className={'flex flex-col gap-1 mt-10'}>
                    <div className={'w-13 h-6 rounded-full bg-[#D9D9D9]'}></div>
                    <div className={'flex gap-1'}>
                        <div className={'w-6 h-6 rounded-full bg-[#D9D9D9]'}></div>
                        <div className={'w-6 h-6 rounded-md bg-[#D9D9D9]'}></div>
                    </div>
                </div>
                <h1 className={'text-black font-semibold text-lg mt-20'}>Стабильность и надёжность</h1>
                <p className={'text-base font-medium text-[#8A8A8A] leading-[1.2rem] mt-9 ml-7'}>мы успешно развиваемся, доказывая свою эффективность на практике.</p>
            </div>
        </div>
    )
}

export default informationBlock;